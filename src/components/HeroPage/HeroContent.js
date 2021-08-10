import React from 'react';
import './HeroContent.css';
import Illustration from '../../images/HeroPage/Illustration.png';

const HeroContent = () => {
  return (
    <div className='hero_contanier'>
      <div className='hero_çontents'>
        <div className='hero_çontent'>
          <div className='hero_content_1'>
            <span data-text='COVID-19 Alert'>COVID-19 Alert</span>
            <br /> Stay at Home quarantine To stop Corona virus
          </div>
          <p className='hero_content_2'>
            There is no specific medicine to prevent or treat coronavirus
            disease (COVID-19). People may need supportive care to .
          </p>
          <button className='hero_button1'>Let Us Help</button>
        </div>
      </div>
      {/* <div className='Illustration' /> */}
    </div>
  );
};

export default HeroContent;
