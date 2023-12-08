import { useState } from "react";
import { useEffect } from "react";
import TournamentCard from "../components/tournament-card";

const TournamentList = () => {

    const [tournaments, setTournaments] = useState([]);

    const getAllTournaments = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tournaments`)
            if (response.ok) {
                const allTournaments = await response.json()
                setTournaments(allTournaments.tournaments)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllTournaments()
    }, [])

    return ( 
        <div>
            {console.log(tournaments)}
            {tournaments && tournaments.map(tournament => (
                <TournamentCard key={tournament._id} tournament={tournament}/>)
            )}
        </div>
     );
}
 
export default TournamentList;