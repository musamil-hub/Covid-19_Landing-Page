import React from 'react';
import './AboutUs.css';
import AboutusContent from './Contents/AboutusContent';
const AboutUs = () => {
  return (
    <div className='au_Contaniner' id='AboutUs'>
      <AboutusContent />
      <div className='au_path1' data-aos='fade-up' data-aos-duration='3000' />
      <div className='au_path2' data-aos='fade-up' data-aos-duration='3000' />
    </div>
  );
};

export default AboutUs;
