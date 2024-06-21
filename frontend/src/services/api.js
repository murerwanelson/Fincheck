import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const getEmployees = () => {
    return axios.get(`${API_URL}employees/`);
};

export const getCompanies = () => {
    return axios.get(`${API_URL}companies/`);
};

export const addEmployee = (employee) => {
    return axios.post(`${API_URL}employees/`, employee);
};

export const updateEmployee = (id, employee) => {
    return axios.put(`${API_URL}employees/${id}/`, employee);
};

export const deleteEmployee = (id) => {
    return axios.delete(`${API_URL}employees/${id}/`);
};
