import './styles.css';
import { Link } from 'react-router-dom';
const CustomLink=(props)=>{
    return(
        props.active?<Link to={props.href} className="icon-link text-light bg-info custom-nav-link" >
            <ion-icon name={props.icon}></ion-icon>
            {props.name}
        </Link>:<Link to={props.href} className="icon-link text-dark custom-nav-link" >
            <ion-icon name={props.icon}></ion-icon>
            {props.name}
        </Link>
    );
}

export default CustomLink;