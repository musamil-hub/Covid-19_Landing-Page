import React from 'react';
import Footer from './Footer/Footer';
import Map from './Map/Map';
import './MapToFooter.css';
import Subscribe from './Subscribe/Subscribe';
import Path1 from '../../images/Footer/path1.png';
import Path2 from '../../images/Footer/path2.png';
const MapToFooter = () => {
  return (
    <div className='mtf_container'>
      <Map />
      <Subscribe />
      <Footer />
      <img src={Path1} className='footer_path1' width='7.78%' />
      <img src={Path2} className='footer_path2' width='9.5%' />
    </div>
  );
};

export default MapToFooter;
