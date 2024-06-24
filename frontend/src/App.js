import React, { useState } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import BulkUpload from './components/BulkUpload';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <EmployeeForm onSave={handleSave} />
      <EmployeeList key={refresh} />
      <BulkUpload />
    </div>
  );
};

export default App;