import React from 'react'
import "./CursosCard.css";

export const CursosCard = ({titulo, descripcion, imagen}) => {
  return (
    <div className="card-curso">
        <img src={imagen} alt={titulo} />
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <button>Ver más</button>
    </div>
  )
}
