import { useState, useEffect } from 'react';
import AddGroup from './components/add_field';
import Navbar from './components/navbar';
import SelectField from './components/select_field';
import { handleSubmit } from './components/functions/handleSubmit';

const Department = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const references = await handleSubmit('companies');
        setCompanies(Object.values(references));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const fields = ['company', 'name'];
  const host = 'http://127.0.0.1:8000/api/department';

  return (
    <>
      <Navbar heading="department" current="departments" />
      <form method="post" action={host} onSubmit={(e) => handleSubmit(host, e, fields)}>
        <SelectField options={companies} title="Select Company" />
        <AddGroup placeholder="Enter Department Name" name="name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Department;