import AddGroup from './components/add_field';
import Navbar from './components/navbar';
const Role=()=>{
    return(
        <>
            <Navbar heading="Role" count={0} />
            <AddGroup placeholder="enter Role name" />
        </>
    )
}

export default Role;