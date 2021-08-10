import React from 'react';
import HeroContent from './HeroContent';
import './HeroPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const HeroPage = () => {
  AOS.init();
  return (
    <div className='hero_containers' id='Overview'>
      <HeroContent />
      <div className='Illustration' data-aos='zoom-in' />
    </div>
  );
};

export default HeroPage;
