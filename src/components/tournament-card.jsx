import "./tournament-card.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";

const TournamentCard = ({tournament}) => {

    return ( 
        <div className="card">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <img className="" src={tournament.picture} alt="poster" />
                    </div>
                    <div className="right">
                        <h2><CalendarMonthIcon /> {tournament.date}</h2>
                        <h1>{tournament.name}</h1>
                        <h3><LocationOnIcon /> {tournament.city}</h3>
                        <p className="">{tournament.description}</p>
                    </div>
                </div>
                <div className="bottom">
                    <Link to={`/tournaments/${tournament._id}`}>
                        <button>Voir les détails</button>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default TournamentCard;