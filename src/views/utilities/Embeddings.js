import { Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
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
    icon: <DeleteOutlined />,
    render: () => <a>Borrar { <DeleteOutlined /> }</a>,
  },
];
const data = [
  {
    key: 1,
    name: 'Tabla de indagación bibliográfica.',
    age: 32,
    address: 'Initialized',
    description: "metadatos: 'filename': 'Tabla de indagación bibliográfica.pdf', 'location': 'https://storage.googleapis.com/buck-tests-ai-chain-37/Tabla%20de%20indagacio%CC%81n%20bibliogra%CC%81fica.pdf', 'file_type': 'pdf', 'file_size': 164079, 'file_encoding': 'binary', 'modification_time': '2023-06-14T02:44:31.164000+00:00'}], 'errors': []",
  },
  {
    key: 2,
    name: 'Calculo vectorial',
    age: 42,
    address: 'Deployed',
    description: "metadatos:",
  },
  {
    key: 3,
    name: 'Taller de Geometría',
    age: 29,
    address: 'Deployed',
    description: 'metadatos: ',
  },
  {
    key: 4,
    name: 'Harry Potter',
    age: 32,
    address: 'error',
    description: 'metadatos: ',
  },
];
const EmbeddingsPage = () => (
  <Table
    columns={columns}
    data = {data}
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
    dataSource={data}
  />
);
export default EmbeddingsPage;
