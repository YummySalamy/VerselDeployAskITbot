import React, { useState } from 'react';
import { Typography, Table, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { UploadOutlined, EditOutlined, AimOutlined, DiffTwoTone, SearchOutlined, GlobalOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Upload, Input, Space, message } from 'antd';
import axios from 'axios';

const { Sider, Content } = Layout;
const { Search } = Input;
const { TextArea } = Input;

const EmbeddingsPage = () => {
  const [selectedOption, setSelectedOption] = useState('sub1');

  const handleMenuClick = (event) => {
    setSelectedOption(event.key);
  };

  const handleTextSubmit = () => {
    const textInput = document.getElementById('text-input');
    const additionalNameInput = document.getElementById('additional-name-input');
    const fileInput = document.getElementById('file-input'); // Agrega un input de tipo "file" en tu formulario y un id

    if (textInput && additionalNameInput && fileInput && fileInput.files.length > 0) {
      const url = 'https://upload-test-xcdhbgn6qa-uc.a.run.app/texto/';
      const data = new FormData();
      data.append('fname', additionalNameInput.value);
      data.append('lname', '');
      data.append('texto', textInput.value);
      data.append('files', fileInput.files[0]);

      axios.post(url, data, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(response => {
          console.log(response.data);
          // Realizar acciones adicionales con la respuesta de la API
          // ...
        })
        .catch(error => {
          console.error('Error al enviar la solicitud:', error);
          // Manejar el error de la solicitud a la API
          // ...
        });
    }
  };

  const handleWebScrape = () => {
    const webUrlInput = document.getElementById('web-url-input');

    if (webUrlInput) {
      const url = 'https://upload-test-xcdhbgn6qa-uc.a.run.app/save_url/';
      const data = {
        url: webUrlInput.value
      };

      axios.post(url, data)
        .then(response => {
          console.log(response.data);
          // Realizar acciones adicionales con la respuesta de la API
          // ...
        })
        .catch(error => {
          console.error('Error al enviar la solicitud:', error);
          // Manejar el error de la solicitud a la API
          // ...
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
            action="https://upload-test-xcdhbgn6qa-uc.a.run.app/archivos/"
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

  return (
    <PageContainer title="Embeddings" description="Esta es la página de embeddings">
      <DashboardCard title="Control de Embeddings">
        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
          <Table>
            <tbody>
              <tr>
                <td>
                  <Layout>
                    <Sider width={200}>
                      <Menu
                        mode="inline"
                        defaultSelectedKeys={['sub1']}
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
                    <Content style={{ padding: '0 24px' }}>{renderContent()}</Content>
                  </Layout>
                </td>
              </tr>
            </tbody>
          </Table>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default EmbeddingsPage;
