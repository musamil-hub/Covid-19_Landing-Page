import React from 'react';
import Headings from '../static/Headings/Headings';
import Title from '../static/Title/Title';
import Paragraph from '../static/Paragraph/Paragraph';
import SymptompsImages from './contents/SymptompsImages/SymptompsImages';
import './Symptomps.css';

const title = 'Covid-19';
const heading = 'Symptomps';
const paragraph =
  'Corona viruses are a type of virus. There are many different kinds, and  some cause disease. A newly identified type has caused a recent outbreak of respiratory';

const Symptomps = () => {
  return (
    <div className='sy_container' id='Symptoms'>
      <div style={{ marginTop: '5vh' }}>
        <Title title={title} />
        <Headings heading={heading} />
        <Paragraph width='42vw' margin paragraph={paragraph} />
      </div>
      <SymptompsImages />
    </div>
  );
};

export default Symptomps;
