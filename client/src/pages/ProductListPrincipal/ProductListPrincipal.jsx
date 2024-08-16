import React from 'react';
import '../ProductListPrincipal/ProductListPrincipal.css'
import women1 from '../assets/women/women1.jpg';
import women2 from '../assets/women/women2.jpg';
import women3 from '../assets/women/women3.jpg';
import men1 from '../assets/men/men1.jpg';
import men2 from '../assets/men/men2.jpg';
import men3 from '../assets/men/men3.jpg';
import acc1 from '../assets/accessories/acc1.png';
import acc2 from '../assets/accessories/acc2.jpg';
import acc3 from '../assets/accessories/acc3.jpg';
import acc4 from '../assets/accessories/acc4.jpg';
import globeIcon from '../assets/iconsProductListP/globeIcon.png';
import mannequinIcon from '../assets/iconsProductListP/mannequinIcon.png';
import offerIcon from '../assets/iconsProductListP/offerIcon.png';
import secureIcon from '../assets/iconsProductListP/secureIcon.png'


const images = [
  { src: women1, title: 'Elegant Dress', category: 'Women', link: '#women', price: 25.99 },
  { src: women2, title: 'Casual Blouse', category: 'Women', link: '#women', price: 30.50 },
  { src: women3, title: 'Summer Shorts', category: 'Women', link: '#women', price: 15.75 },
  { src: men1, title: 'Classic Jeans', category: 'Men', link: '#men', price: 45.00 },
  { src: men2, title: 'Sports Shoes', category: 'Men', link: '#men', price: 60.25 },
  { src: men3, title: 'Blue Shoes', category: 'Men', link: '#men', price: 32.99 },
  { src: acc1, title: 'Engagement Ring', category: 'Accessories', link: '#accessories', price: 12.50 },
  { src: acc2, title: 'Glasses', category: 'Accessories', link: '#accessories', price: 8.99 },
  { src: acc3, title: 'Sports Cap', category: 'Accessories', link: '#accessories', price: 20.00 },
  { src: acc4, title: ' Watch', category: 'Accessories', link: '#accessories', price: 5.75 },
];

const ProducListPrincipal = () => {
  return (
    <div className="gallery">
      <div className='featured'><h2>Featured products</h2></div>
      <div className='seccion'>
        {images.map((image, index) => (
          <div className="item" key={index}>
            <a href={image.link}>
              <img src={image.src} alt={image.title} />
              <div className="title">{image.title}</div>
              <div className="price" >
                ${image.price.toFixed(2)} {/* Formato de precio con dos decimales */} </div>
              <div className="category">{image.category}</div>
            </a>
          </div>
        ))}
      </div>
      <div className="icons">
        <div className='iconSeccion'>
          <img src={globeIcon} alt="" />
          <h2>Worlide Shipping</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='iconSeccion'>
          <img src={mannequinIcon} alt="" />
          <h2>Best Quality</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='iconSeccion'>
          <img src={offerIcon} alt="" />
          <h2>Best Offers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='iconSeccion'>
          <img src={secureIcon} alt="" />
          <h2>Secure Payment</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};
export default ProducListPrincipal;
