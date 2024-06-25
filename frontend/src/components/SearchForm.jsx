import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [criteria, setCriteria] = useState({
    name: '',
    company: '',
    position: '',
    department: '',
    year_started: '',
    year_left: '',
  });

  const handleChange = (e) => {
    setCriteria({
      ...criteria,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(criteria);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={criteria.name} onChange={handleChange} />
      </div>
      <div>
        <label>Company:</label>
        <input type="text" name="company" value={criteria.company} onChange={handleChange} />
      </div>
      <div>
        <label>Position:</label>
        <input type="text" name="position" value={criteria.position} onChange={handleChange} />
      </div>
      <div>
        <label>Department:</label>
        <input type="text" name="department" value={criteria.department} onChange={handleChange} />
      </div>
      <div>
        <label>Year Started:</label>
        <input type="number" name="year_started" value={criteria.year_started} onChange={handleChange} />
      </div>
      <div>
        <label>Year Left:</label>
        <input type="number" name="year_left" value={criteria.year_left} onChange={handleChange} />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;