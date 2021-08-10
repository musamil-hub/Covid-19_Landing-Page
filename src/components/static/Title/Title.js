import React from 'react';
import './Title.css';
const Title = ({ title, Left }) => {
  const textAlign = Left ? 'Left' : 'center';
  return (
    <div
      className='title_container'
      style={{
        fontWeight: '600',
        fontSize: '1.7vmax',
        textAlign: textAlign,
      }}
    >
      {title}
    </div>
  );
};

export default Title;
