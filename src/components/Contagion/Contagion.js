import React from 'react';
import Heading from '../static/Heading/Heading';
import './Contagion.css';
import ContagionContents from './contents/ContagionContents/ContagionContents';

const headingData = {
  title: 'Covid-19',
  content: 'Contagion',
  paragraph:
    'Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type',
  width_para: '34vw',
};

const Contagion = () => {
  return (
    <div className='cg_containers' id='Contagion'>
      <div className='cg_contents'>
        <Heading data={headingData} />
        <ContagionContents />
      </div>
    </div>
  );
};

export default Contagion;
