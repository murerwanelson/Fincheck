const AddGroup=(props)=>{
    
    return(
        <div className="container">
            <br />
            <div className="mb-3 d-flex">
                <input type="text" name={props.name} className="form-control" id="exampleFormControlInput1" placeholder={props.placeholder}></input>
            </div>
            <br />
            <div className="mb-3 d-flex flex-row-reverse">
                <button type="submit" className="btn btn-info text-light">Add</button>
            </div>
        </div>
    );
}

export default AddGroup;
