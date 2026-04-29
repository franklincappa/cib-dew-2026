import React from 'react'
import { useState } from "react";
import "./Navbar.css"

export const Navbar = ({ linkActivo = "inicio", onSeleccionar }) => {

    const [menuAbierto, setMenuAbierto] = useState(false);

    const links = [
    { id: "inicio", texto: "Inicio", href: "#inicio" },
    { id: "empleados", texto: "Empleados", href: "#empleados" },
    { id: "contacto", texto: "Contacto", href: "#contacto" },
  ];
  
    const handleClick = (e, link) => {
    if (onSeleccionar) {
      e.preventDefault();
      onSeleccionar(link.id);
    }
    setMenuAbierto(false); // cerrar menú móvil al hacer clic
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="navbar-logo">RRHH</div>
          <div className="navbar-title">Sistema de RRHH</div>
        </div>
        <div className="navbar-links">
            <ul className={`navbar-links ${menuAbierto ? "abierto" : ""}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={linkActivo === link.id ? "active" : ""}
                onClick={(e) => handleClick(e, link)}
              >
                {link.texto}
              </a>
            </li>
          ))}
 
          {/* Menú de usuario al final */}
          <li className="navbar-user">
            <a href="#perfil" onClick={(e) => handleClick(e, { id: "perfil" })}>
              Mi cuenta
            </a>
          </li>
        </ul>

        </div>
      </div>
    </div>
  )
}
