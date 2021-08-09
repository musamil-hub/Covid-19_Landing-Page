import React from 'react';
import './Image.css';
const Images = ({ images, onIcon, icons, onLeft }) => {
  const imgs = onIcon ? false : true;
  const marginLeft = onLeft ? '-.8vw' : '6vw';
  // console.log(marginLeft);

  return (
    <>
      {imgs && (
        <img
          src={images}
          width='75%'
          style={{
            marginLeft: marginLeft,
            marginTop: '2vh',
            objectFit: 'cover',
          }}
        />
      )}
      {!imgs && (
        <div className='image_icon'>
          <img
            src={icons}
            width='100%'
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      )}
    </>
  );
};

export default Images;
