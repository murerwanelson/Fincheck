import { handleSubmit } from "./functions/handleSubmit";
const host='http://127.0.0.1:8000/api/company'
const fields=['id', 'name', 'date_of_reg', 'reg_num', 'address', 'email' ]
const CompanyFields=(props)=>{
    return(
        <form className="container" method="post" target='' onSubmit={(e)=>{handleSubmit(host,e,fields)}}>
            <div className="input-group flex-nowrap">
                <input type="text" name='name' className="form-control" placeholder="Company Name" aria-label="Company Name" aria-describedby="addon-wrapping"></input>
            </div>
            <br />
            <div className="input-group flex-nowrap">
                <input type="date" name='date_of_reg' className="form-control" ></input>
            </div>
            <br />
            <div className="input-group flex-nowrap">
                <input type="text" name='reg_num' className="form-control" placeholder="Reg Number" aria-label="Reg Number" aria-describedby="addon-wrapping"></input>
                <input type="text" name="address" className="form-control" placeholder="Address" aria-label="Address" aria-describedby="addon-wrapping"></input>
            </div>
            <br />
            <div className="input-group flex-nowrap">
                <input type="email" name='email' className="form-control" placeholder="Company Email" aria-label="Company Email" aria-describedby="addon-wrapping"></input>
            </div>
            <br />
            <div className="input-group d-flex justify-content-end">
                <button type="submit" className="btn btn-info text-light">Add {props.entity}</button>
            </div>
        </form>
    );
}

export default CompanyFields;