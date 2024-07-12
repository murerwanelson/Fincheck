import AddGroup from './components/add_field';
import Navbar from './components/navbar';
import SelectField from './components/select_field';
import { getData } from './components/functions/handleSubmit';
import { useState, useEffect } from 'react';
const Contact=()=>{
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
    return(
        <>
            <Navbar heading="contact" current="contacts"  />
            <form method="post" action="" >
                <SelectField options={companies} title="select company" />
                <AddGroup placeholder="enter employee name" />
            </form>
        </>
    )
}

export default Contact;