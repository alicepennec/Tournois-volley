import { useNavigate } from "react-router";
import "./tournament-card.css";

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
                        <h2>{tournament.date}</h2>
                        <h3>{tournament.city}</h3>
                        <h1>{tournament.name}</h1>
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