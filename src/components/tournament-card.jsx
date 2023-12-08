import { useNavigate } from "react-router";

const TournamentCard = ({tournament}) => {
    
    const navigate = useNavigate()

    const goToTournament = (id) => {
        navigate(`/tournament/${id}`)
    }

    return ( 
        <div onClick={() => goToTournament(tournament.id)}>
            <div className="text-center">
                <img src={tournament.picture} alt="poster" /> 
                <div>
                <h1>{tournament.date}</h1>
                <h2>{tournament.city}</h2>
                <p>{tournament.name}</p>
                <p><small>{tournament.description}</small></p>
                </div>
            </div>
        </div>
     );
}
 
export default TournamentCard;