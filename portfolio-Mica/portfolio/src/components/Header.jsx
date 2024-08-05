import React from "react";

const Header = () => {
  return (
    <header>
      <div className="color">
        <h1>Mi Portafolio</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">Sobre Mí</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
