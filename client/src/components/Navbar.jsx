import React from 'react';
import './Navbar.css'; //estilos navbar

const Navbar = () => {
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
                <li><a href="#"><i className="icon-user"></i></a></li>
                <li><a href="#"><i className="icon-cart"></i></a></li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;
