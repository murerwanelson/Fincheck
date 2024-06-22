import React, { useState } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

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
    </div>
  );
};

export default App;
