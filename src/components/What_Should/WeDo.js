import React from 'react';
import Headings from '../static/Headings/Headings';
import Title from '../static/Title/Title';
import Paragraph from '../static/Paragraph/Paragraph';
import './WeDo.css';
import WeDoContents from './WeDoContents';
// icons & images
import path1 from '../../images/WeDo/path1.png';
import path2 from '../../images/WeDo/path2.png';
import path3 from '../../images/WeDo/path3.png';

import image1 from '../../images/WeDo/MaskGirl_1.png';
import image2 from '../../images/WeDo/MaskGirl_2.png';
import image3 from '../../images/WeDo/MaskGirl_3.png';
import image4 from '../../images/WeDo/MaskGirl_4.png';

const title = 'Covid-19';
const heading = 'What should we do';
const paragraph =
  'Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused';

const contents = [
  {
    icons: '01',
    title: 'wear masks',
    para1: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested `,
    para2:
      'meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively',
    images: image1,
    paraWidth: '30vw',
  },
  {
    icons: '02',
    title: 'Wash Your Hands',
    para1: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards`,
    para2:
      'compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals',
    images: image2,
    paraWidth: '28vw',
  },
  {
    icons: '03',
    title: 'Use nose -  rag',
    para1: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested `,
    para2:
      'meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively ',
    images: image3,
    paraWidth: '30vw',
  },
  {
    title: 'Avoid contacts',
    para1: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested `,
    para2:
      'meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic ',
    images: image4,
    paraWidth: '30vw',
  },
];
const WeDo = ({ data }) => {
  console.log(data);
  return (
    <div className='wd_container' id='Prevention'>
      <Title title={title} />
      <Headings heading={heading} />
      <Paragraph width='40vw' margin paragraph={paragraph} />
      <div style={{ marginTop: '10vh', marginLeft: '10vh' }}>
        {data.map((datas, index) => {
          let count = index + 1;
          count = count.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
          });
          return (
            <WeDoContents
              data={{ datas, count }}
              count={count}
              key={index}
              index={index}
            />
          );
        })}
      </div>
      <img
        src={path1}
        className='wd_path1'
        data-aos='fade-up'
        data-aos-anchor-placement='center-bottom'
      />
      <img
        src={path2}
        className='wd_path2'
        data-aos='fade-up'
        data-aos-anchor-placement='center-bottom'
      />
      <img
        src={path3}
        className='wd_path3'
        data-aos='fade-up'
        data-aos-anchor-placement='center-bottom'
      />
    </div>
  );
};

export default WeDo;
