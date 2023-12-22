import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({menuOpen, setMenuOpen}) => {
    return (   
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <Link to="/">
                        <h1>Tournois Green</h1> 
                    </Link>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>  
            </div>
        </div>
     );
}
 
export default Navbar;