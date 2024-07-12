import { getData,handleSubmit } from "./functions/handleSubmit";
import SelectField from "./select_field";
const MultiInput=(props)=>{
    const host='http://127.0.0.1:8000/api/company';
    const fields=['department', 'name', 'phone', 'id_num'];
    const references=getData(props.reference);
    return(
        <div className="container" method="post" target="" onSubmit={(e)=>{handleSubmit(host,e,fields)}}>
            <div className="input-group flex-nowrap">
                <input type="text" name={props.field1} className="form-control" placeholder={props.field1} aria-label={props.field1} aria-describedby="addon-wrapping"></input>
            </div>
            <br />
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder={props.field2} aria-label={props.field2} aria-describedby="addon-wrapping"></input>
            </div>
            <br />
            <div className="input-group d-flex justify-content-end">
                <button type="button" className="btn btn-info text-light">Add {props.entity}</button>
            </div>
        </div>
    );
}


export default MultiInput;