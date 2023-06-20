import React, { useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { UploadOutlined, EditOutlined, DiffTwoTone, GlobalOutlined, QuestionCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Layout, Menu, Button, Upload, Input, Space, message } from 'antd';
import axios from 'axios';

const { Sider, Content } = Layout;
const { Search } = Input;
const { TextArea } = Input;

const FileStorage = () => {
  const [selectedOption, setSelectedOption] = useState('sub1');
  const [tableData, setTableData] = useState([]);

  const handleMenuClick = (event) => {
    setSelectedOption(event.key);
  };

  const handleTextSubmit = () => {
    const textInput = document.getElementById('text-input');
    const additionalNameInput = document.getElementById('additional-name-input');
    const fileInput = document.getElementById('file-input');

    if (textInput && additionalNameInput && fileInput && fileInput.files.length > 0) {
      const url = 'https://ai-chain-upload-service-dw2j52225q-uc.a.run.app/texto/';
      const data = new FormData();
      data.append('fname', additionalNameInput.value);
      data.append('lname', '');
      data.append('texto', textInput.value);
      data.append('files', fileInput.files[0]);

      axios.post(url, data, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(response => { 
          console.log(response.data);
          const newData = {
            key: response.data.key,
            name: additionalNameInput.value,
            age: response.data.age,
            address: response.data.address,
            description: response.data.description,
          };
          setTableData(prevData => [...prevData, newData]);
        })
        .catch(error => {
          console.error('Error al enviar la solicitud:', error);
        });
    }
  };

  const handleWebScrape = () => {
    const webUrlInput = document.getElementById('web-url-input');

    if (webUrlInput) {
      const url = 'https://ai-chain-upload-service-dw2j52225q-uc.a.run.app/save_url/';
      const data = {
        url: webUrlInput.value
      };

      axios.post(url, data)
        .then(response => {
          console.log(response.data);
          const newData = {
            key: url,
            name: webUrlInput.value,
            age: response.data.age,
            address: response.data.address,
            description: response.data.description,
          };
          setTableData(prevData => [...prevData, newData]);
        })
        .catch(error => {
          console.error('Error al enviar la solicitud:', error);
        });
    }
  };

  const renderContent = () => {
    const selectedNavItem = items.find((item) => item.key === selectedOption);
    if (selectedNavItem) {
      return selectedNavItem.content;
    }
    return null;
  };

  const items = [
    {
      key: 'sub1',
      icon: <UploadOutlined />,
      label: 'Carga de Archivos',
      content: (
        <div>
          <Upload
            name="files"
            action="https://ai-chain-upload-service-dw2j52225q-uc.a.run.app/archivos/"
            onChange={(info) => {
              if (info.file.status === 'done') {
                message.success(`"${info.file.name}" se cargó correctamente.`);
              } else if (info.file.status === 'error') {
                message.error(`"${info.file.name}" no se pudo cargar.`);
              }
            }}
          >
            <Button icon={<DiffTwoTone />}>Subir Archivo</Button>
          </Upload>
        </div>
      ),
    },
    {
      key: 'sub2',
      icon: <EditOutlined />,
      label: 'Ingresar Texto',
      content: (
        <div>
          <Space direction="vertical">
            <Input placeholder="Nombre del ChatBot" id="additional-name-input" />
            <TextArea placeholder="Ingresa el texto para entrenar" id="text-input" />
            <Button type="primary" onClick={handleTextSubmit}>Enviar</Button>
          </Space>
        </div>
      ),
    },
    {
      key: 'sub3',
      icon: <GlobalOutlined />,
      label: 'Sitio Web',
      content: (
        <div>
          <Space direction="vertical">
            <Search
              placeholder="Ingresa la URL del sitio"
              id="web-url-input"
              enterButton="Web Scraping"
              size="large"
              onSearch={handleWebScrape}
            />
          </Space>
        </div>
      ),
    },
    {
      key: 'sub4',
      icon: <QuestionCircleOutlined />,
      label: 'Q&A',
      content: (
        <div>
          Contenido de Preguntas y Respuestas
        </div>
      ),
    },
  ];

  const columns = [
    {
      title: 'Nombre de ChatBot',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Estado',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Acción',
      dataIndex: '',
      key: 'x',
      render: () => <a>Borrar <DeleteOutlined /></a>,
    },
  ];

  const expandedRowRender = (record) => (
    <p style={{ margin: 0 }}>{record.description}</p>
  );

  const rowExpandable = (record) => record.name !== 'Not Expandable';

  return (
    <PageContainer>
      <DashboardCard title="Control de Datos">
        <Layout>
          <Sider width={200} theme="light">
            <Menu
              mode="inline"
              selectedKeys={[selectedOption]}
              onClick={handleMenuClick}
              style={{ height: '100%', borderRight: 0 }}
            >
              {items.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Content style={{ padding: '16px' }}>
            {renderContent()}
          </Content>
        </Layout>
      </DashboardCard>
      <DashboardCard title="Lista de Datos">
        <Table
          columns={columns}
          dataSource={tableData}
          expandable={{
            expandedRowRender: (record) => (
              <p
                style={{
                  margin: 0,
                }}
              >
                {record.description}
              </p>
            ),
            rowExpandable: (record) => record.name !== 'Not Expandable',
          }}
        />
      </DashboardCard>
    </PageContainer>
  );
};

export default FileStorage;
