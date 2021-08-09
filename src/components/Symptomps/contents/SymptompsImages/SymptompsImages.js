import React from 'react';
import './SymptompsImages.css';
import Center from '../../../../images/Symptomps/center.png';
import Left from '../../../../images/Symptomps/left.png';
import Right from '../../../../images/Symptomps/right.png';
const SymptompsImages = () => {
  return (
    <div className='si_container'>
      <img src={Left} alt='girl' className='si_left-img' />
      <div className='si_center'>
        <img src={Center} alt='girl' className='si_center-img' />
      </div>
      <img src={Right} alt='girl' className='si_right-img' />
    </div>
  );
};

export default SymptompsImages;
