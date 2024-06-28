// import './styles.css';
const Upload=()=>{
    return(
        <form className="d-flex justify-content-center align-items-center" onSubmit={()=>{}}>
            <div className="container">
                <div className="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02"></input>
                    <label class="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                </div>
            </div>
        </form>
    );
}

export default Upload;