import React from 'react';
import './Paragraph.css';
const Paragraph = ({
  paragraph,
  Bold,
  Large,
  width,
  Left,
  margin,
  paragraph2,
}) => {
  const bold = Bold ? '700' : '500';
  const fontsize = Large ? '1vmax' : '0.96vmax';
  const textAlign = Left ? 'Left' : 'center';
  const margins = margin ? 'auto' : '0';
  const para = paragraph2 ? false : true;
  return (
    <>
      {para && (
        <div
          className='paragraph_container'
          style={{
            width: width,
            fontWeight: bold,
            fontSize: fontsize,
            textAlign: textAlign,
            margin: margins,
          }}
        >
          {paragraph}
        </div>
      )}
      {!para && (
        <div
          className='paragraph_container'
          style={{
            width: width,
            fontWeight: bold,
            fontSize: fontsize,
            textAlign: textAlign,
            margin: margins,
          }}
        >
          {paragraph2.para1}
          <br />
          {paragraph2.para2}
        </div>
      )}
    </>
  );
};

export default Paragraph;
