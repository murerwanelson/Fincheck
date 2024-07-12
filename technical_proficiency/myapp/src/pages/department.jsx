import { useState, useEffect } from 'react';
import AddGroup from './components/add_field';
import Navbar from './components/navbar';
import SelectField from './components/select_field';
import { getData } from './components/functions/handleSubmit';

const Department = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const references = await getData('companies');
        let reference_list=Object.values(references)
        setCompanies(Object.values(reference_list));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const fields=['company', 'name'];
  const host='http://127.0.0.1:8000/api/department'
  return (
    <>
      <Navbar heading="department" current="departments" />
      <form method="post" action='' onSubmit={(e)=>{handleSubmit(host,e,fields)}}>
        <SelectField options={companies} title="select company" />
        <AddGroup placeholder="enter department name" name="name" />
      </form>
    </>
  );
};

export default Department;