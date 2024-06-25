const MultiInput=(props)=>{
    return(
        <div className="container">
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
            </div>
            <br />
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
            </div>
            <br />
            <div className="input-group d-flex justify-content-end">
                <button type="button" class="btn btn-primary">Add {props.entity}</button>
            </div>
        </div>
    );
}

export default MultiInput;