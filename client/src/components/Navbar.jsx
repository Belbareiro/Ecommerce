import React from 'react';
import './Navbar.css';
import { FaUser, FaShoppingCart } from 'react-icons/fa'; // Importar los iconos
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="navbar-menu">
          <li><Link to="/todosLosProductos">TODO</Link></li>
          <li><Link to="/categoria/mujer">MUJERES</Link></li>
          <li><Link to="/categoria/hombre">HOMBRES</Link></li>
          <li><Link to="/categoria/accesorios">ACCESORIOS</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li><Link to="/acercaDe">ACERCA DE</Link></li>
          <li><Link to="/contacto">CONTACTO</Link></li>
          <li><Link to="/carrito"><FaShoppingCart /> {cartCount}</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
