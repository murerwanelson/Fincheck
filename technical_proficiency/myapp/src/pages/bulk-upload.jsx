import Navbar from './components/navbar';
import Upload from './components/upload';

const BulkUpload=()=>{
    return(
        <>
            <Navbar heading="upload" current="bulk upload" />
            <Upload/>
        </>
        
    );
}

export default BulkUpload;