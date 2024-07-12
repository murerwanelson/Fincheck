import './styles.css';
//const host=window.location.host
const host='http://127.0.0.1:8000/api/bulk_upload'
const Upload=()=>{
    return(
        <form className="d-flex justify-content-center align-items-center" method="post" target='' encType="multipart/form-data" onSubmit={async (e)=>{
            e.preventDefault();
            const form=e.target;
            const formData = new FormData();
            formData.append('csv_file', form.csv.files[0]);
            form.reset();
            try {
                const response = await fetch(host, {
                  method: 'POST',
                  body: formData,
                });
          
                if (response.ok) {
                  return alert('File uploaded successfully');
                } else {
                  return alert('Error uploading file');
                }
              } catch (error) {
                return alert('Error:', error);
            }
            
            
        }}>
            <div className="container">
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02" name="csv"></input>
                    <label className="input-group-text" htmlFor="submit">Upload</label>
                </div>

            </div>
            <input type="submit" id="submit" className='hidden'></input>
        </form>
    );
}

export default Upload;