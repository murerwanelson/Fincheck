import CustomLink from './nav-link';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Department from '../department';
import Company from '../company';
import Employee from '../employee';
import Duty from '../duty';
import Role from '../Role';
const Navbar = (props) => {
    const links=props.links;
    console.log(`links:${links}`)
  return (
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid d-flex justify-content-start">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {props.heading}
            </Link>
          </div>
          <div className="container row w-50">
            {links?.map((link, index) => (
              <div key={index} className="col">
                <CustomLink name={link.text} icon={link.icon} count={link.count} href={link.href} />
              </div>
            ))}
          </div>
        </div>
      </nav>
  );
};

export default Navbar;