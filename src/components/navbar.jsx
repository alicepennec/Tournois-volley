import { Link } from "react-router-dom";

const Navbar = () => {
    return (   
        <div className="flex">
            <Link to="/">
                <h1>Tournois Green</h1> 
            </Link>
            <Link to="tournaments/add">
                <h2>Ajouter un tournoi</h2>
            </Link>
            <Link>
                <h2>Mon compte</h2>
            </Link>
        </div>
     );
}
 
export default Navbar;