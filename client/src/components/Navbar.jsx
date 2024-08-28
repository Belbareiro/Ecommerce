import React, { useState } from 'react';
import './Navbar.css';
import AboutUs from './AboutUs';
import Contact from './Contact';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleAboutModal = () => {
    setIsAboutModalOpen(!isAboutModalOpen);
  };

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <ul className="navbar-menu">
            <li><a href="/todosLosProductos">TODO</a></li>
            <li><a href="/categoria/mujer">MUJERES</a></li>
            <li><a href="/categoria/hombre">HOMBRES</a></li>
            <li><a href="/categoria/accesorios">ACCESORIOS</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li><a href="#" onClick={toggleAboutModal}>ACERCA DE</a></li>
            <li><a href="#" onClick={toggleContactModal}>CONTACTO</a></li>
            <li><a href="/carrito"><FaShoppingCart /> {cartCount}</a></li>
          </ul>
        </div>
      </nav>

      {/* Modal de About Us */}
      <AboutUs isOpen={isAboutModalOpen} onClose={toggleAboutModal} />

      {/* Modal de Contacto */}
      <Contact isOpen={isContactModalOpen} onClose={toggleContactModal} />
    </>
  );
};

export default Navbar;
