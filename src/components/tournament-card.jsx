import { useNavigate } from "react-router";
import "./tournament-card.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TournamentCard = ({tournament}) => {
    
    const navigate = useNavigate()

    const goToTournament = (id) => {
        navigate(`/tournaments/${id}`)
    }

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
                    <button onClick={() => goToTournament(tournament.id)} className="">Voir les détails</button>
                </div>
            </div>
        </div>
     );
}
 
export default TournamentCard;