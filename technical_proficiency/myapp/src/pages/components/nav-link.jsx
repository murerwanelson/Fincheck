import { Link } from 'react-router-dom';
const CustomLink=(props)=>{
    return(
        <Link to={props.href} className="icon-link text-dark" >
            <ion-icon name={props.icon}></ion-icon>
            {props.name}:{props.count}
        </Link>
    );
}

export default CustomLink;