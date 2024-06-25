import MultiInput from "./components/multi-input";
import Navbar from './components/navbar';
const Duty=()=>{
    return(
        <>
            <Navbar heading="duty" count={0} />
            <MultiInput entity="Duty"/>
        </>
        
    );
}

export default Duty;