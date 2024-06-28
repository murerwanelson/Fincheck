
const SelectField=(props)=>{
    return(
        <div className="container">
            <div className="mb-3 d-flex">
                <select className="form-select" aria-label="Default select example">
                    <option selected>{props.title}</option>
                    {
                        props.options?.map((option, index) => (<option value={index}>{option}</option>))
                    }
                    
                </select>
            </div>
        </div>
    );
}

export default SelectField;
