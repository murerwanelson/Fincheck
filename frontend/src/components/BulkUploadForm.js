import React, { useState } from 'react';
import axios from 'axios';

const BulkUploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await axios.post('/api/upload_bulk/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        setSuccess('File uploaded successfully');
        onUpload();
      } else {
        setError('An error occurred while uploading the file');
      }
    } catch (error) {
      setError('An error occurred while uploading the file');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Upload File:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <button type="submit">Upload</button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
};

export default BulkUploadForm;
