import React, { useState } from 'react';
import { addEmployee, updateEmployee } from '../services/api';

const EmployeeForm = ({ employee = {}, onSave }) => {
    const [formData, setFormData] = useState(employee);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (formData.id) {
            updateEmployee(formData.id, formData)
                .then(() => onSave())
                .catch(err => {
                    console.error(err);
                    setError('An error occurred while updating the employee.');
                });
        } else {
            addEmployee(formData)
                .then(() => onSave())
                .catch(err => {
                    console.error(err);
                    setError('An error occurred while saving the employee.');
                });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name || ''} onChange={handleChange} required />
                </div>
                <div>
                    <label>Company:</label>
                    <input type="text" name="company" value={formData.company || ''} onChange={handleChange} required />
                </div>
                <button type="submit">Save</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default EmployeeForm;
