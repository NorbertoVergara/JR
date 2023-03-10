import React from 'react';
import './Navbar.css';
import logo from './logo.png';
import Boton from '../Boton-hamburguesa/boton-hamburguesa.js';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/" className="navbar__logo-link">
          <div className="navbar__logo-container">
            <img src={logo} alt="Logo" className="navbar__logo-img" />
            <div className='nombreLogo'>DIGIBOOTCAMP</div>
          </div>
        </a>
      </div>
      <div className="navbar__buttons">
        <Button title="Inicio" className="titulo" />
        <Button title="Campamento" />
        <Button title="Bootcamp" />
        <Button title="Boletines" />
        <Button title="Inicio de Sesión" className="navbar__login" />
        <Button title="Registrarse" className="navbar__register" />
        <Boton/>
      </div>
    </nav>
  );
}

function Button(props) {
  return (
    <button className={`navbar__button ${props.className}`}>
      {props.title}
    </button>
  );
}


export default Navbar;
