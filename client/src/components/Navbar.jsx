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
          <li><Link to="/categoria/women">MUJERES</Link></li>
          <li><Link to="/categoria/men">HOMBRES</Link></li>
          <li><Link to="/categoria/accessories">ACCESORIOS</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li><Link to="/about">ACERCA DE</Link></li>
          <li><Link to="/contact">CONTACTO</Link></li>
          <li><a href="#">$0.00</a></li>
          <li><Link to="#"><FaUser /></Link></li>
          <li><Link to="/carrito"><FaShoppingCart /> {cartCount}</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
