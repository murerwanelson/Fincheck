import SizedBox from "./sized_box";
const AddGroup=(props)=>{
    return(
        <div className="container">
            <div className="mb-3 d-flex">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={props.placeholder}></input>
                <SizedBox width={20} />
                <button type="button" className="btn btn-primary">Add</button>
            </div>
        </div>
    );
}

export default AddGroup;
