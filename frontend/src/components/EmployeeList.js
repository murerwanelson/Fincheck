import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/employees');
        setEmployees(response.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching employees:', err);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>{employee.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;