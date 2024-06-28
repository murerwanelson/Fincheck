import { Routes, Route } from 'react-router-dom';
import Department from './pages/department';
import Company from './pages/company';
import Employee from './pages/employee';
import Role from './pages/Role';
import Duty from './pages/duty';
import BulkUpload from './pages/bulk-upload';
import Contact from './pages/contact';
const App=()=>{
    return( 
        <div className="App">
            <Routes>
                <Route path="/department" element={<Department />} />
                <Route path="/" element={<Company />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/role" element={<Role />} />
                <Route path="/duty" element={<Duty />} />
                <Route path="/bulk-upload" element={<BulkUpload/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </div> 
    );
}

export default App;