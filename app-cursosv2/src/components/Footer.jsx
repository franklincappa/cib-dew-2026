import React from 'react'
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className='footer'>
        <h3>Portal Master</h3>
        <p>Siguenos en nuestras redes sociales</p>
        <div className='redes'>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">Youtube</a>
        </div>
        <p> ©2026 Todos los derechos reservados</p>
    </footer>
  )
}
