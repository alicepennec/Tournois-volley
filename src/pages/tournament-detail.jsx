import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./tournament-detail.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Presentation from "../components/presentation";
import Inscriptions from "../components/inscriptions";
import Infos from "../components/infos";

const TournamentDetail = () => {
    const {id} = useParams()

    const [tournament, setTournament] = useState();

    const getTournament = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tournaments/${id}`)
            if(response.ok) {
                const oneTournament = await response.json()
                setTournament(oneTournament)
                console.log(oneTournament)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTournament()
    }, [id])

    return ( 
        <div>
            { tournament ? (
                <div className="tournamentDetail">
                    <div className="top">
                        <div className="imgContainer">                            
                            <img src="/assets/ballon-fil.jpg" alt="" />
                            <div className="text">
                                <h2>{tournament.tournament.date}</h2>
                                <h1>{tournament.tournament.name}</h1>
                            </div>                            
                        </div>
                    </div>

                    <div className="menu">
                        <h3>Accueil</h3>
                        <ArrowRightAltIcon />
                        <h3>{tournament.tournament.region}</h3>
                        <ArrowRightAltIcon />
                        <h3>{tournament.tournament.name}</h3>
                    </div>

                    <div className="sections">
                        <Presentation tournament={tournament}/>
                        <Inscriptions tournament={tournament}/>
                        <Infos tournament={tournament}/>
                    </div>
                </div>
            ) : ( 
             <h4>Aucun tournoi à afficher</h4>
            )}
        </div>
     );
}
 
export default TournamentDetail;