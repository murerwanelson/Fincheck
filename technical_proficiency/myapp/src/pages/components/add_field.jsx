
const AddGroup=(props)=>{
    return(
        <div className="container">
            <div className="mb-3 d-flex">
                <div className="container">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={props.placeholder}></input>
                </div>
                <button type="button" className="btn btn-primary">Add</button>
            </div>
        </div>
    );
}

export default AddGroup;
