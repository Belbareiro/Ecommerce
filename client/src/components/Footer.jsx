import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <span>OFERTA DE HASTA 70% DE DESCUENTO EN TODA LA ROPA Y ARTÍCULOS DE MODA, EN TODAS LAS MARCAS.</span>
            </div>
            <div className='footer-medio'>
                <div>
                    <span>D'BCLAM</span>
                    <p>El mejor look en cualquier momento y lugar.</p>
                </div>
                <div>
                    <h2><Link to="/categoria/mujer">Para ella</Link></h2>
                    <ul>
                        <li>Vaqueros de mujer</li>
                        <li>Tops y camisas</li>
                        <li>Chaquetas de mujer</li>
                        <li>Accesorios para mujer</li>
                    </ul>
                </div>
                <div>
                    <h2> <Link to="/categoria/hombre">Para él</Link></h2>
                    <ul>
                        <li>Vaqueros de hombre</li>
                        <li>Camisas de hombre</li>
                        <li>Zapatos de hombre</li>
                        <li>Accesorios para hombre</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyrigth © D'BCLAM, desarrollado por D'BCLAM </p>
            </div>
        </div >
    )
}

export default Footer;
