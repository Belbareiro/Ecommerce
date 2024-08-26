import React from 'react';
import '../PageSection/PageSection.css';
import icon from '../assets/pageSection/icon.jpg';
import photo1 from '../assets/pageSection/photo1.jpg';
import photo2 from '../assets/pageSection/photo2.jpg';
import photo3 from '../assets/pageSection/photo3.jpg';
import Header from '../../components/Header';
import ProductListPrincipal from '../ProductListPrincipal/ProductListPrincipal';
import { Link } from 'react-router-dom';

const PageSection = () => {
  const photos = [
    { id: 1, src: photo1, title: '20% de descuento en gafas para ti', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', buttonText: 'COMPRAR AHORA' },
    { id: 2, src: photo2, title: 'Camisas de manga larga: estilo y comodidad para hombre', description: 'Sed ac magna vel magna bibendum, egestas magna vel.', buttonText: 'COMPRAR AHORA' },
    { id: 3, src: photo3, title: 'Mira ahora los productos que tenemos para ti', description: 'Vestibulum ante ipsum primis in faucibus orci luctus et.', buttonText: 'VER MÁS' },
  ];

  return (
    <div className="page-section">
      <Header />
      <header className="header">
        <img src={icon} alt="Icono" className="icon" />
        <img src={icon} alt="Icono" className="icon" />
        <img src={icon} alt="Icono" className="icon" />
        <img src={icon} alt="Icono" className="icon" />
        <img src={icon} alt="Icono" className="icon" />
      </header>
      <div className="content" id="contentOne">
        {photos.map(photo => (
          <div className="photo" key={photo.id}>
            <img src={photo.src} alt={`Foto ${photo.id}`} />
            <div className='containerTitle'> 
               <h2 className="title">{photo.title}</h2>
            </div>
            <p className="description">{photo.description}</p>
            <button className="button">
              <Link to="/todosLosProductos">
                {photo.buttonText}
              </Link>
            </button>
          </div>
        ))}
      </div>
      <ProductListPrincipal />
    </div>
  );
};

export default PageSection;
