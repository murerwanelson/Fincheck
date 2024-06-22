// src/components/EmployeeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState('');

    const fetchEmployees = (criteria = {}) => {
        axios.get('http://127.0.0.1:8000/api/employees/', { params: criteria })
            .then(response => {
                setEmployees(response.data);
            })
            .catch(err => {
                console.error(err);
                setError('An error occurred while fetching employees.');
            });
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleSearch = (criteria) => {
        fetchEmployees(criteria);
    };

    return (
        <div>
            <h1>Employees</h1>
            <SearchForm onSearch={handleSearch} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.name} - {employee.company.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
