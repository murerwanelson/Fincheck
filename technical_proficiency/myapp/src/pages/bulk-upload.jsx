import Navbar from './components/navbar';
import Upload from './components/upload';
const BulkUpload=()=>{
    return(
        <>
            <Navbar heading="duty" count={0} />
            <Upload/>
        </>
        
    );
}

export default BulkUpload;