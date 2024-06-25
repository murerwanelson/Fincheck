import AddGroup from './components/add_field';
import Navbar from './components/navbar';
const Company=()=>{
    return(
        <>
            <Navbar heading="company" count={0} />
            <AddGroup placeholder="enter company name" />
        </>
    )
}

export default Company;