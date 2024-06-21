import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/employees', { name, company });
      onSave();
      setName('');
      setCompany('');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred while saving the employee.');
      console.error('Error saving employee:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Company:</label>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>
      <button type="submit">Save</button>
      {error && <div>Error: {error}</div>}
    </form>
  );
};

export default EmployeeForm;