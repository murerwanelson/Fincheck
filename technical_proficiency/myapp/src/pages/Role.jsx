import AddGroup from './components/add_field';
import Navbar from './components/navbar';
import SelectField from './components/select_field';
import { useState, useEffect } from 'react';
import { getData } from './components/functions/handleSubmit';
const Role=()=>{
    const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const references = await getData('employees');
        let reference_list=Object.values(references)
        setEmployees(Object.values(reference_list));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

    return(
        <>
            <Navbar heading="Role" current="role" />
            <SelectField options={employees} title="select employee" />
            <AddGroup placeholder="enter Role name" />
        </>
    )
}

export default Role;