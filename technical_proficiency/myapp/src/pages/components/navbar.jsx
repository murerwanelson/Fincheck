import Link from './nav-link';
const Navbar=(props)=>{
    return(
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid d-flex justify-content-start">
                
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.heading}</a>
                </div>
                <div className='container row w-50'>
                    <div className='col'>
                        <Link name="companies" icon="home-outline" count={0}/>
                    </div>
                    <div className='col'>
                        <Link name="employees" icon="person-outline" count={0}/>
                    </div>
                    <div className='col'>
                        <Link name="departments" icon="people-outline" count={0}/>
                    </div>
                    <div className='col'>
                        <Link name="contacts" icon="call-outline" count={0}/>
                    </div>
                </div>
            
            </div>
        </nav>
    );
}

export default Navbar;