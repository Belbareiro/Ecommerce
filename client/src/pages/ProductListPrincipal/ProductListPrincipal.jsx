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
  { src: women1, title: 'Vestido Elegante', category: 'Mujer', link: 'categoria/mujer', price: 25 },
  { src: women2, title: 'Blusa Blanca', category: 'Mujer', link: 'categoria/mujer', price: 40 },
  { src: women3, title: 'Pantalones Cortos de Verano', category: 'Mujer', link: 'categoria/mujer', price: 15 },
  { src: men1, title: 'Vaquero masculino', category: 'Hombre', link: 'categoria/hombre', price: 10 },
  { src: men2, title: 'Zapato Elegante', category: 'Hombre', link: '#categoria/hombre', price: 15 },
  { src: men3, title: 'Zapato Azul', category: 'Hombre', link: '#categoria/hombre', price: 10 },
  { src: acc1, title: 'Anillo de Compromiso', category: 'Accesorios', link: 'categoria/accesorios', price: 12 },
  { src: acc2, title: 'Gafas', category: 'Accesorios', link: 'categoria/accesorios', price: 8 },
  { src: acc3, title: 'Gorra Deportiva', category: 'Accesorios', link: 'categoria/accesorios', price: 20 },
  { src: acc4, title: 'Reloj', category: 'Accesorios', link: 'categoria/accesorios', price: 5 },
];

const ProducListPrincipal = () => {
  return (
    <div className="gallery">
      <div className='featured'><h2>Productos Destacados</h2></div>
      <div className='seccion'>
        {images.map((image, index) => (
          <div className="item" key={index}>
            <a href={image.link}>
              <img src={image.src} alt={image.title} />
              <div className="title">{image.title}</div>
              <div className="price" >
                Gs {image.price.toFixed(2)} {/* Formato de precio con dos decimales */} </div>
              <div className="category">{image.category}</div>
            </a>
          </div>
        ))}
      </div>
      <div className="icons">
        <div className='iconSeccion'>
          <img src={globeIcon} alt="" />
          <h2>Envío mundial</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='iconSeccion'>
          <img src={mannequinIcon} alt="" />
          <h2>Mejor calidad</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='iconSeccion'>
          <img src={offerIcon} alt="" />
          <h2>Mejores ofertas</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='iconSeccion'>
          <img src={secureIcon} alt="" />
          <h2>Pago Seguro</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};
export default ProducListPrincipal;
