import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderHome.css';

const Header = () => {
    return (
        <div className="header-home">
            <h1>Lloviendo ofertas para<span>¡El verano caluroso!</span></h1>
            <p>25% de descuento en todos los productos</p>
            <button className="comprar-ahora-boton">
                <Link to="/todosLosProductos">COMPRAR AHORA</Link>
            </button>
        </div>
    );
};

export default Header;
