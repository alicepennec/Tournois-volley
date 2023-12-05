import { useNavigate } from "react-router";

const TournamentCard = ({tournament}) => {
    
    const navigate = useNavigate()

    const goToTournament = (id) => {
        navigate(`/tournament/${id}`)
    }

    return ( 
        <div onCLick={() => goToTournament(tournament.id)}>
            <div>
               <img src={tournament.picture} alt="poster" /> 
            </div>
            <div>
                <h3>{tournament.date}</h3>
                <h3>{tournament.city}</h3>
                <p>{tournament.name}</p>
                <p><small>{tournament.description}</small></p>
            </div>

        </div>
     );
}
 
export default TournamentCard;