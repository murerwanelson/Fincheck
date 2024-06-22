import React, { useState, useEffect } from 'react';
import { getEmployees } from '../services/api';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees().then(response => {
            setEmployees(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Employees</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.name} - {employee.company.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
