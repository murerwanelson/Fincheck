import AddGroup from './components/add_field';
import Navbar from './components/navbar';
const Department=()=>{
    return(
        <>
            <Navbar heading="department" count={0} />
            <AddGroup placeholder="enter department name" />
        </>
    )
}

export default Department;