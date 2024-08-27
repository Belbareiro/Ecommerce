import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderHome.css';

const Header = () => {
    return (
        <div className="header-home">
            <h1>Mira todo lo que tenemos<span>Para ti!</span></h1>

            <button className="comprar-ahora-boton">
                <Link to="/todosLosProductos">COMPRAR AHORA</Link>
            </button>
        </div>
    );
};

export default Header;
