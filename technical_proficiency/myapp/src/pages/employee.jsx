import EmployeeFields from "./components/employee-fields";
import Navbar from './components/navbar';
import SelectField from './components/select_field';
import { getData } from './components/functions/handleSubmit';
import { useState, useEffect } from 'react';
const Employee=()=>{
    const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const references = await getData('departments');
        let reference_list=Object.values(references)
        setDepartments(Object.values(reference_list));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
    return(
        <>
            <Navbar heading="employee" current="employees"/>
            <form method="post" action="" >
                <SelectField options={departments} title="select department" />
                <EmployeeFields entity="Employee"/>
            </form>
            
        </>
        
    );
}

export default Employee;