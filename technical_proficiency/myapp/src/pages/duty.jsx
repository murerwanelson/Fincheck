import MultiInput from "./components/multi-input";
import Navbar from './components/navbar';
import SelectField from './components/select_field';
import { getData } from './components/functions/handleSubmit';
import { useState, useEffect } from 'react';
const Duty=()=>{
    const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const references = await getData('roles');
        let reference_list=Object.values(references)
        setRoles(Object.values(reference_list));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

    return(
        <>
            <Navbar heading="duty" current="duty" />
            <form method="post" action="" >
                <SelectField options={roles} title="select role" />
                <MultiInput entity="Duty" field1="duty_name" field2="description"/>
            </form>
            
        </>
        
    );
}

export default Duty;