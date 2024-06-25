import MultiInput from "./components/multi-input";
import Navbar from './components/navbar';
const Employee=()=>{
    return(
        <>
            <Navbar heading="employee" count={0}/>
            <MultiInput entity="Employee"/>
        </>
        
    );
}

export default Employee;