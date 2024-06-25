import React, { useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

const BulkUpload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        try {
            // Use the Papa library to parse the CSV file
            Papa.parse(file, {
                download: true,
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    setData(results.data);
                    console.log('Parsed data:', results.data);
                },
            });

            // Now you can use the parsed data to upload to the server
            const response = await axios.post('/api/bulk_upload/', data);
            console.log('Upload response:', response.data);
            alert('Upload successful!');
        } catch (error) {
            console.error('Error uploading data:', error);
            setError('An error occurred while uploading the data.');
        }
    };

    return (
        <div>
            <h2>Bulk Upload Employees</h2>
            {error && <div className="error">{error}</div>}
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default BulkUpload;