import React from 'react'
import "./Menu.css";

export const Menu = () => {
  return (
    <header className='menu'>
        <div className='logo'>Portal Master</div>
        <nav>
            <ul className='menu-links'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Cursos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    </header>
  )
}
