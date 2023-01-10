import icon from "./assets/earth-africa-solid.svg"

export default function Navbar(){
    return(
        <nav className="nav">
            <img src={icon} className="nav-icon"></img>
            <h3>my travel site</h3>
        </nav>
    )
}