import React from 'react';
import './Headings.css';
const Headings = ({ heading, bold, small, Left, normal }) => {
  const textAlign = Left ? 'Left' : 'center';
  const fontSize = small ? '2.2vmax' : '2.8vmax';
  const fontWeight = bold ? '520' : '600';
  const fontFamily = normal
    ? '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
    : 'Red Hat Display, sans-serif';

  return (
    <div
      className='heading_container'
      style={{
        fontWeight: fontWeight,
        fontSize: fontSize,
        textAlign: textAlign,
        fontFamily: fontFamily,
      }}
    >
      {heading}
    </div>
  );
};

export default Headings;
