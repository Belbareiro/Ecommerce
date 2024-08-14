import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderHome.css';

const Header = () => {
    return (
        <div className="header-home">
            <h1>Raining Offers For <span>Hot Summer!</span></h1>
            <p>25% Off On All Products</p>
            <button className="comprar-ahora-boton">
                {/* Desplaza hasta el componente de ofertas */}
                <a href="#contentOne">SHOP NOW</a>
            </button>
            <button className="encontrar-mas-boton">
                <Link to="/">FIND MORE</Link>
            </button>
        </div>
    );
};

export default Header;
