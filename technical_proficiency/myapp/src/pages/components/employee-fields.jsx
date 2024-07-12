
import SelectField from "./select_field";
const EmployeeFields=(props)=>{
    
    return(
        <div className="container">
            
            
            <div className="input-group flex-nowrap">
                <input type="text" name="EmployeeName" className="form-control" placeholder="Employee Name" aria-label="Employee Name" aria-describedby="addon-wrapping"></input>
            </div>
           
            <br />
            <div className="input-group flex-nowrap">
                <input type="text" name="idNum" className="form-control" placeholder="ID Number" aria-label="id Number" aria-describedby="addon-wrapping"></input>
            
                <input type="text" name="phone" className="form-control" placeholder="Employee Phone Number" aria-label="Employee Phone" aria-describedby="addon-wrapping"></input>
            </div>
            <br />
            
            <div className="input-group d-flex justify-content-end">
                <button type="button" className="btn btn-info text-light">Add {props.entity}</button>
            </div>
        </div>
    );
}

export default EmployeeFields;