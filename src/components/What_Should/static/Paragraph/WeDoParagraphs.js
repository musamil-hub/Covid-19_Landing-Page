import React from 'react';
import classes from './WeDoParagraphs.module.css';

const WeDoParagraphs = ({ para1, para2, paraWidth }) => {
  return (
    <div className={classes.paragraph} style={{ width: `${paraWidth}` }}>
      {para1}
      <br />
      {para2}
    </div>
  );
};

export default WeDoParagraphs;
