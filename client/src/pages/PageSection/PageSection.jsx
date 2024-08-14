import React from 'react';
import '../PageSection/PageSection.css';
import icon from '../assets/pageSection/icon.png';
import photo1 from '../assets/pageSection/photo1.jpg';
import photo2 from '../assets/pageSection/photo2.jpg';
import photo3 from '../assets/pageSection/photo3.jpg';
import Header from '../../components/Header';
import ProductListPrincipal from '../ProductListPrincipal/ProductListPrincipal';

const PageSection = () => {
  const photos = [
    { id: 1, src: photo1, title: '20% Off on glasses for you', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', buttonText: 'SHOP NOW' },
    { id: 2, src: photo2, title: 'Long-sleeved shirts: style and comfort for men', description: 'Sed ac magna vel magna bibendum, egestas magna vel.', buttonText: 'SHOP NOW' },
    { id: 3, src: photo3, title: 'Look now at the products we have for you', description: 'Vestibulum ante ipsum primis in faucibus orci luctus et.', buttonText: 'CHECK OUT' },
  ];

  return (
    <div className="page-section">
      <Header />
      <header className="header">
        <img src={icon} alt="Icono" className="icon" />
        <h1 className="page-name">Nombre de la Página</h1>
        <img src={icon} alt="Icono" className="icon" />
        <h1 className="page-name">Nombre de la Página</h1>
        <img src={icon} alt="Icono" className="icon" />
        <h1 className="page-name">Nombre de la Página</h1>
        <img src={icon} alt="Icono" className="icon" />
        <h1 className="page-name">Nombre de la Página</h1>
      </header>
      <div className="content" id="contentOne">
        {photos.map(photo => (
          <div className="photo" key={photo.id}>
            <img src={photo.src} alt={`Foto ${photo.id}`} />
            <div className='containerTitle'> <h2 className="title">{photo.title}</h2></div>
            <p className="description">{photo.description}</p>
            <button className="button">{photo.buttonText}</button>
          </div>
        ))}
      </div>
      <ProductListPrincipal />
    </div>
  );
};

export default PageSection;
