import React from 'react';
import './Navbar.css';
import { FaUser, FaShoppingCart } from 'react-icons/fa'; // Importar los iconos
import { Link } from 'react-router-dom'; // Importar Link

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="navbar-menu">
          <li><Link to="/todosLosProductos">EVERYTHING</Link></li>
          <li><Link to="/categoria/women">WOMEN</Link></li> {/* Cambiado a Link */}
          <li><Link to="/categoria/men">MEN</Link></li> {/* Cambiado a Link */}
          <li><Link to="/categoria/accessories">ACCESSORIES</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
          <li><a href="#">${cartCount}.00</a></li>
          <li><Link to="#"><FaUser /></Link></li>
          <li><Link to="#"><FaShoppingCart /> {cartCount}</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;