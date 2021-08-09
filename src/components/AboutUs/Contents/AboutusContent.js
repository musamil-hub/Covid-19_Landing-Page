import React from 'react';
import './AboutusContent.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MaskPath from '../../../images/AboutUs/maskpath.png';
const AboutusContent = () => {
  AOS.init();
  return (
    <div className='ac_container'>
      <div className='ac_image'>
        <img src={MaskPath} className='maskpath' />
      </div>
      <div className='ac_contents'>
        <div
          className='ac_content-1'
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-duration='1000'
        >
          <span>What Is Covid-19</span>
          <br />
          Coronavirus
        </div>
        <div
          className='ac_content-2'
          data-aos='fade-up'
          data-aos-delay='500'
          data-aos-duration='1000'
        >
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type has caused a recent
          outbreak of respiratory illness now called COVID-19.Lauren Sauer,
          M.S., the director of operations with the Johns Hopkins Office of
          Critical Event Preparedness and Response
        </div>
        <button className='lm_button'>Learn More</button>
      </div>
    </div>
  );
};

export default AboutusContent;
