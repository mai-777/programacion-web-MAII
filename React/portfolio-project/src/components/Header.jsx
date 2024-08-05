import React from "react";
import "React/portfolio-project/src/header.css";

function Header() {
  return (
    <header className="header">
      <h1>Mi Portafolio</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/proyectos">Proyectos</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
