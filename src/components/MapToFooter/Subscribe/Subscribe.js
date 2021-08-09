import React from 'react';
import './Subscribe.css';
const Subscribe = () => {
  return (
    <div className='sub_container'>
      <div className='sub_contents'>
        <div className='sub_content1'>
          Have Question in mind? Let us help you
        </div>
        <div className='sub_content2'>
          <input
            type='email'
            className='input_sub'
            placeholder='snmonydemo@gmail.com'
            required
          />
          <button className='button_sub'> Send </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
