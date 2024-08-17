import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <span>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</span>
            </div>
            <div className='footer-medio'>
                <div>
                    <span>D'BCLAM</span>
                    <p>The best look anytime, anywhere.</p>
                </div>
                <div>
                    <h2>For Her</h2>
                    <ul>
                        <li><Link to="women">Women Jeans</Link></li>
                        <li><Link to="women">Tops and Shirts</Link></li>
                        <li><Link to="women">Women Jackets</Link></li>
                        <li><Link to="women">Women Accessories</Link></li>
                    </ul>
                </div>
                <div>
                    <h2>For Her</h2>
                    <ul>
                        <li><Link to="men">Men Jeans</Link></li>
                        <li><Link to="men">Men Shirts</Link></li>
                        <li><Link to="men">Men Shoes</Link></li>
                        <li><Link to="men">Men Accessories</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyrigth © D'BCLAM, Powered by D'BCLAM </p>
            </div>
        </div>
    )
}

export default Footer;