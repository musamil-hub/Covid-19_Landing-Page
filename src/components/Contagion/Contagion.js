import React from 'react';
import Headings from '../static/Headings/Headings';
import Title from '../static/Title/Title';
import Paragraph from '../static/Paragraph/Paragraph';
import './Contagion.css';
import ContagionContents from './contents/ContagionContents/ContagionContents';

const title = 'Covid-19';
const heading = 'Contagion';
const paragraph =
  'Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type';

const Contagion = () => {
  return (
    <div
      className='cg_containers'
      id='Contagion'
      data-aos='fade-up'
      data-aos-duration='2000'
    >
      <div className='cg_contents'>
        <div style={{ marginBottom: '6vh' }}>
          <Title title={title} />
          <Headings heading={heading} />
          <Paragraph width='34vw' margin paragraph={paragraph} />
        </div>
        <ContagionContents />
      </div>
    </div>
  );
};

export default Contagion;
