import React from 'react';
import classes from './Heading.module.css';
const Heading = ({ data }) => {
  return (
    <>
      <div className={classes.sh_header}>
        <span>{data.title}</span>
        <br />
        {data.content}
      </div>
      <div
        className={classes.sh_paragraph}
        style={{ width: `${data.width_para}` }}
      >
        {data.paragraph}
      </div>
    </>
  );
};

export default Heading;
