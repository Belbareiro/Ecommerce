import React from 'react';
import './Navbar.css';
import { FaUser, FaShoppingCart } from 'react-icons/fa'; // Importar los iconos

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="navbar-menu">
          <li><a href="#">EVERYTHING</a></li>
          <li><a href="#">WOMEN</a></li>
          <li><a href="#">MEN</a></li>
          <li><a href="#">ACCESSORIES</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT US</a></li>
          <li><a href="#">$0.00</a></li>
          <li><a href="#"><FaUser /></a></li>
          {/* Aquí se muestra el ícono del carrito y el contador actual del carrito */}
          <li><a href="#"><FaShoppingCart /> {cartCount}</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
