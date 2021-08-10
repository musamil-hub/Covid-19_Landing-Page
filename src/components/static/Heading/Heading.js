import React from 'react';
import Title from '../Title/Title';
import Headings from '../Headings/Headings';
import classes from './Heading.module.css';
import Paragraph from '../Paragraph/Paragraph';
const Heading = ({ data }) => {
  return (
    <>
      <Title />
      <Headings heading={data.content} />
      <Paragraph data={data} />
    </>
  );
};

export default Heading;
