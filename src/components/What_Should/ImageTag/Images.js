import React from 'react';
import './Image.css';
// import {  } from "../../../images";
const Images = ({ images, onIcon, onLeft, count }) => {
  const imgs = onIcon ? false : true;
  const marginLeft = onLeft ? '-.8vw' : '6vw';
  console.log(images);
  return (
    <>
      {imgs && (
        <img
          src={images}
          // src={images}
          width='75%'
          style={{
            marginLeft: marginLeft,
            marginTop: '2vh',
            objectFit: 'cover',
          }}
          data-aos='zoom-in'
          data-aos-delay='300'
        />
      )}
      {!imgs && <div className='image_icon'>{count}</div>}
    </>
  );
};

export default Images;
