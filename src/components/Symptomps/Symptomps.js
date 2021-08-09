import React from 'react';
import Heading from '../static/Heading/Heading';
import SymptompsImages from './contents/SymptompsImages/SymptompsImages';
import './Symptomps.css';

const headingData = {
  title: 'Covid-19',
  content: 'Symptomps',
  paragraph:
    'Corona viruses are a type of virus. There are many different kinds, and  some cause disease. A newly identified type has caused a recent outbreak of respiratory',
  width_para: '42vw',
};

const Symptomps = () => {
  return (
    <div className='sy_container' id='Symptoms'>
      <Heading data={headingData} />
      <SymptompsImages />
    </div>
  );
};

export default Symptomps;
