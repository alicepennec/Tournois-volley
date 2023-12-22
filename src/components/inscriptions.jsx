import React from 'react'

export default function Inscriptions({tournament}) {
  return (
    <div className="inscriptions" id="inscriptions">
        <h1>Inscriptions</h1>
        <div className="left">
            <h1>{tournament.tournament.name}</h1>
            <h1>Les tournois proposés :</h1>
            <ul>
                <li>National</li>
                <li>Régional</li>
            </ul>
        </div>
        <div className="right">
            <h2>Contact</h2>
            <h2>{tournament.tournament.contact}</h2>
            <h3>{tournament.tournament.telephone}</h3>
            <h3>{tournament.tournament.email}</h3>
        </div>

    </div>
  )
}
