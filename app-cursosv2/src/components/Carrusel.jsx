import React from 'react'
import { useState } from 'react';
import "./Carrusel.css";

export const Carrusel = () => {

    const imagenes = [
        {
        url: "https://picsum.photos/id/1015/1200/350",
        titulo: "Aprende desarrollo web"
        },
        {
        url: "https://picsum.photos/id/1016/1200/350",
        titulo: "Construye proyectos reales"
        },
        {
        url: "https://picsum.photos/id/1018/1200/350",
        titulo: "Domina React paso a paso"
        }
    ];

    const [indice, setIndice] = useState(0);

    const siguiente = () => {
        setIndice((indice + 1) % imagenes.length);
    };

    const anterior = () => {
        setIndice((indice - 1 + imagenes.length) % imagenes.length);
    };

  return (
    <section className='carrusel'>
        <button onClick={anterior}> ❮❮ </button>
        <div className='slide' >
            <img src={imagenes[indice].url} alt="" />
            <h3>{imagenes[indice].titulo}</h3>
        </div>
        <button onClick={siguiente}> ❯❯ </button>
    </section>
  )
}
