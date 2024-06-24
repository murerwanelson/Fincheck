import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [employeeIdNumber, setEmployeeIdNumber] = useState('');
  const [company, setCompany] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [dateStartedInRole, setDateStartedInRole] = useState('');
  const [dateLeftRole, setDateLeftRole] = useState('');
  const [dutiesInRole, setDutiesInRole] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/employees/', {
        name,
        employee_id_number: employeeIdNumber,
        company,
        department,
        role,
        date_started_in_role: dateStartedInRole,
        date_left_role: dateLeftRole,
        duties_in_role: dutiesInRole,
      });
      if (response.status === 201) {
        setSuccess('Employee saved successfully');
        onSave();
      } else {
        setError('An error occurred while saving the employee');
      }
    } catch (error) {
      setError('An error occurred while saving the employee');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Employee ID Number:</label>
        <input type="text" value={employeeIdNumber} onChange={(e) => setEmployeeIdNumber(e.target.value)} />
      </div>
      <div>
        <label>Company:</label>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>
      <div>
        <label>Department:</label>
        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
      </div>
      <div>
        <label>Role:</label>
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
      </div>
      <div>
        <label>Date Started in Role:</label>
        <input type="date" value={dateStartedInRole} onChange={(e) => setDateStartedInRole(e.target.value)} />
      </div>
      <div>
        <label>Date Left Role:</label>
        <input type="date" value={dateLeftRole} onChange={(e) => setDateLeftRole(e.target.value)} />
      </div>
      <div>
        <label>Duties in Role:</label>
        <textarea value={dutiesInRole} onChange={(e) => setDutiesInRole(e.target.value)} />
      </div>
      <button type="submit">Save</button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
};

export default EmployeeForm;
