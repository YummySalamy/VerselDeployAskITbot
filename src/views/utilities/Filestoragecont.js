import React, { useState } from 'react';
import FileStorage from '../views/utilities/Filestorage';
import EmbeddingsPage from './EmbeddingsPage';

const FileStorageContainer = () => {
  const [tableData, setTableData] = useState([]);

  const handleAddToTable = (newData) => {
    setTableData(prevData => [...prevData, newData]);
  };

  return (
    <>
      <FileStorage onAddToTable={handleAddToTable} />
      <EmbeddingsPage tableData={tableData} />
    </>
  );
};

export default FileStorageContainer;
