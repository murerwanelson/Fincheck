import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/employees');
        setEmployees(response.data);
        setLoading(false);
      } catch (err) {
        setError('Unable to fetch employee data. Please try again later.');
        setLoading(false);
        console.error('Error fetching employees:', err);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
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