import React from 'react';
import HeroContent from './Contents/HeroContent';
import './HeroPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const HeroPage = () => {
  AOS.init();
  return (
    <div className='hero_containers' id='Overview_nav'>
      <HeroContent />
      <div
        className='Illustration'
        data-aos='fade-up-left'
        data-aos-delay='10'
        data-aos-duration='2000'
      />
    </div>
  );
};

export default HeroPage;
