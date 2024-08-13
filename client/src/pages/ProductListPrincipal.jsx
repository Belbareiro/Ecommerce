
import React from 'react';
import PageSection from './PageSection/PageSection';
import accesoriosParaHombre from '../pages/assets/accesoriosParaHombre.jpg';
import pantalonParaHombre from '../pages/assets/pantalonParaHombre.jpg';
import shortParaDama from'../pages/assets/shortParaDama.jpg';

const ProducListPrincipal = () => {
    const photos = [
        { id: 1, src: accesoriosParaHombre, description: 'Accesorios para verse de moda', buttonText: 'Shop Now' },
        { id: 2, src: pantalonParaHombre, description: 'Elegante siempre, en cada ocacion tu mejor look', buttonText: 'Shop Now' },
        { id: 3, src: shortParaDama, description: 'Con este look estaras en onda.', buttonText: 'Check Out' },
      ];
    return (
        <div className="page-section">
            <PageSection/>
            <h1>Lista De Productos Principales</h1>
            <div className="content" id="content">
        {photos.map(photo => (
          <div className="photo" key={photo.id}>
            <img src={photo.src} alt={`Foto ${photo.id}`} />
            <button className="button">{photo.buttonText}</button>
            <p className="description">{photo.description}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default ProducListPrincipal;
