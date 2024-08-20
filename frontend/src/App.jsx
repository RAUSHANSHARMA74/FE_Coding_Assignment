import React, { useState } from 'react'
import "./App.css"
import FileUpload from './Components/Pages/FileUpload/FileUpload';
import DataTable from './Components/Pages/DataTable/DataTable';

export default function App() {
  const [csvData, setCsvData] = useState([]);

  const handleFileUpload = (data) => {
    setCsvData(data);
  };

  return (
    <div className="mx-auto h-[100vh] p-4 bg-[#374151]">
      <h1 className="text-2xl font-bold mb-4 text-white">CSV Upload and Table Display</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {csvData.length > 0 && <DataTable data={csvData} />}
    </div>
  );
}
