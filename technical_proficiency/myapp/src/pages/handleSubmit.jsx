import React, { useState } from 'react';

const Department = () => {
  const [formData, setFormData] = useState({
    // your form fields
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log('Form submitted', formData);
  };

  return (
    <div>
      <h1>Department Form</h1>
      <form onSubmit={handleSubmit}>
        {/* your form fields */}
        <div>
          <label htmlFor="departmentName">Department Name:</label>
          <input
            type="text"
            id="departmentName"
            name="departmentName"
            value={formData.departmentName || ''}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Department;