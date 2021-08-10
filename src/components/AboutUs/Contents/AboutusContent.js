import React from 'react';
import './AboutusContent.css';
import MaskPath from '../../../images/AboutUs/maskpath.png';

import Headings from '../../static/Headings/Headings';
import Title from '../../static/Title/Title';
import Paragraph from '../../static/Paragraph/Paragraph';

const title = 'What Is Covid-19';
const heading = 'Coronavirus';
const paragraph =
  'Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response';

const AboutusContent = () => {
  return (
    <div className='ac_container'>
      <div className='ac_image' data-aos='zoom-in-up'>
        <img src={MaskPath} className='maskpath' />
      </div>
      <div className='ac_contents'>
        <Title title={title} Left />
        <Headings heading={heading} Left />
        <div className='ac_content-2'>
          <Paragraph width='34.2vw' Left Large paragraph={paragraph} />
        </div>
        <button className='lm_button'>Learn More</button>
      </div>
    </div>
  );
};

export default AboutusContent;
