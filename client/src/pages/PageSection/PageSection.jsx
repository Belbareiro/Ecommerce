import React from 'react';
import '../PageSection/PageSection.css';
import icon from '../assets/icon.png';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import Header from '../../components/Header';

const PageSection = () => {
  const photos = [
    { id: 1, src: photo1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', buttonText: 'Shop Now' },
    { id: 2, src: photo2, description: 'Sed ac magna vel magna bibendum, egestas magna vel.', buttonText: 'Shop Now' },
    { id: 3, src: photo3, description: 'Vestibulum ante ipsum primis in faucibus orci luctus et.', buttonText: 'Check Out' },
  ];

  return (
    <div className="page-section">
      <Header />
      <header className="header">
      </header>
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

export default PageSection;
