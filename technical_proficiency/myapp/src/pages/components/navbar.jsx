import CustomLink from './nav-link';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
const links = [
  {
    text: 'departments',
    icon: 'home-outline',
    href: '/department',
  },
  {
    text: 'employees',
    icon: 'person-outline',
    href: '/employee',
  },
  {
    text: 'companies',
    icon: 'home-outline',
    href: '/',
  },

  {
    text: 'contacts',
    icon: 'call-outline',
    href: '/contact',
  },
  {
      text: 'bulk upload',
      icon: 'cloud-upload-outline',
      href: '/bulk-upload',
    },
    {
      text: 'duty',
      icon: 'construct-outline',
      href: '/duty',
    },
    {
      text: 'role',
      icon: 'shapes-outline',
      href: '/role',
    },
];
const Navbar = (props) => {
    
  return (
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid d-flex justify-content-start">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {props.heading}
            </Link>
          </div>
          <div className="container row w-100">
            {links?.map((link, index) => (
              (link.text==props.current)?<div key={index} className="col">
              <CustomLink name={link.text} icon={link.icon} href={link.href} active={true} />
            </div>:<div key={index} className="col">
                <CustomLink name={link.text} icon={link.icon} href={link.href} active={false} />
              </div>
            ))}
          </div>
        </div>
      </nav>
  );
};

export default Navbar;