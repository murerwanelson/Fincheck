import React, { useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

const BulkUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        Papa.parse(file, {
            header: true,
            complete: async (results) => {
                try {
                    const response = await axios.post('/api/bulk_upload/', results.data);
                    alert('Upload successful!');
                } catch (error) {
                    console.error('Error uploading data:', error);
                    alert('An error occurred while uploading the data.');
                }
            },
        });
    };

    return (
        <div>
            <h2>Bulk Upload Employees</h2>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default BulkUpload;
