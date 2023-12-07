import { useState } from "react";
import { useNavigate } from "react-router";

const TournamentForm = ({isUpdate, tournament}) => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: {value: tournament.name, isValid: true},
        date: {value: tournament.date, isValid: true},
        city: {value: tournament.city, isValid: true},
        description: {value: tournament.description, isValid: true}
    })

    const handleInputChange = (e) => {
        const newName = e.target.name;
        const newValue = e.target.value;
        const newField = {[newName]: {value: newValue}};

        setForm({...form, ...newField});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tournaments${isUpdate ? `/${tournament.id}` : ''}`, {
                method: isUpdate ? 'PUT' : 'POST',
                body: JSON.stringify(),
                headers: {'Content-type': 'application/json'}
            })
            if(response.ok) {
                const currentTournament = await response.json()
                navigate(`/tournaments/${currentTournament.id}`)
            }
        } catch (error) {
            console.log(error)
        }
    };

    return ( 
        <form onSubmit={e => handleSubmit(e)}>
            <div>
                <label>Nom</label>
                <input type='text' name='name' value={form.name.value} onChange={e => {handleInputChange(e)}}/>
                <label>Date</label>
                <input type='text' name='date' value={form.date.value} onChange={e => {handleInputChange(e)}}/>
            </div>
        </form>
    );
}
 
export default TournamentForm;