const SelectField = (props) => {
    let options = Array.from(props.options);
    options=options[0];
    return (
      <div className="container">
        <div className="mb-3 d-flex">
          <select className="form-select" aria-label="Default select example">
            <option value="" selected>
              {props.title}
            </option>
            {options?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
            
          </select>
        </div>
      </div>
    );
  };
  
  export default SelectField;