import { useNavigate } from "react-router";

const TournamentCard = ({tournament}) => {
    
    const navigate = useNavigate()

    const goToTournament = (id) => {
        navigate(`/tournaments/${id}`)
    }

    return ( 
        <div onClick={() => goToTournament(tournament.id)} className="py-8 px-8 max-w-sm mx-auto bg-white rounded-wl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block mx-auto h-24 sm:mx-0 sm:shrink-0" src={tournament.picture} alt="poster" />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <h1 className="text-lg text-black font-semibold">{tournament.date}</h1>
                    <h2>{tournament.city}</h2>
                    <p>{tournament.name}</p>
                    <p className="text-slate-500 font-medium"><small>{tournament.description}</small></p>
                </div>
                <button className="px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent ">Voir les détails</button>
            </div>
        </div>
     );
}
 
export default TournamentCard;