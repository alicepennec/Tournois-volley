import { useEffect, useState } from "react";
import { useParams } from "react-router";

const TournamentDetail = () => {
    const {tournamentId} = useParams()

    const [tournament, setTournament] = useState();

    const getTournament = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tournament/${tournamentId}`)
            if(response.ok) {
                const oneTournament = await response.json()
                setTournament(oneTournament)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTournament()
    }, [tournamentId])

    return ( 
        <div>
            { tournament ? (
                <div>
                    <h1>{tournament.name}</h1>
                    <h2>{tournament.date}</h2>
                    <h2>{tournament.city}</h2>

                </div>
            ) : ( 
             <h4>Aucun tournoi à afficher</h4>
            )}
        </div>
     );
}
 
export default TournamentDetail;