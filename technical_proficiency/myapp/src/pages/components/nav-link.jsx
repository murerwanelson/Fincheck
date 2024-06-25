const Link=(props)=>{
    return(
        <a className="icon-link text-dark" href="#">
                    <ion-icon name={props.icon}></ion-icon>
                    {props.name}:{props.count}
                </a>
    );
}

export default Link;