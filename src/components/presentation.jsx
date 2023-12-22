import React from 'react'
import "./presentation.css";

export default function Presentation({tournament}) {
  return (
    <div className='presentation' id="presentation">
        <div className="left">
            <h1>{tournament.tournament.name}</h1>
            <h2>{tournament.tournament.date}</h2>
            <h2>{tournament.tournament.description}</h2>  
        </div>
        <div className="right">
            <img src={tournament.tournament.picture} alt="" />
        </div>
    </div>
  )
}
