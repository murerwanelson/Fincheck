import CompanyFields from './components/company-fields';
import Navbar from './components/navbar';


const Company=()=>{
    return(
        <>
            <Navbar heading="company" current="companies" />
            <CompanyFields entity="company" />
        </>
    )
}

export default Company;