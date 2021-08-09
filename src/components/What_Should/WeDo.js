import React from 'react';
import Heading from '../static/Heading/Heading';
import './WeDo.css';
import WeDoContents from './WeDoContents';
// icons & images
import path1 from '../../images/WeDo/path1.png';
import path2 from '../../images/WeDo/path2.png';
import path3 from '../../images/WeDo/path3.png';

import icon1 from '../../images/WeDo/1.png';
import icon2 from '../../images/WeDo/2.png';
import icon3 from '../../images/WeDo/3.png';
import icon4 from '../../images/WeDo/4.png';

import image1 from '../../images/WeDo/MaskGirl_1.png';
import image2 from '../../images/WeDo/MaskGirl_2.png';
import image3 from '../../images/WeDo/MaskGirl_3.png';
import image4 from '../../images/WeDo/MaskGirl_4.png';

const headingData = {
  title: 'Covid-19',
  content: 'What should we do',
  paragraph:
    'Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused',
  width_para: '40vw',
};

const content1 = {
  icons: icon1,
  title: 'wear masks',
  para1: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested `,
  para2:
    'meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively',
  images: image1,
  paraWidth: '30vw',
};

const content2 = {
  icons: icon2,
  title: 'Wash Your Hands',
  para1: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards`,
  para2:
    'compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals',
  images: image2,
  paraWidth: '28vw',
};
const content3 = {
  icons: icon3,
  title: 'Use nose -  rag',
  para1: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested `,
  para2:
    'meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively ',
  images: image3,
  paraWidth: '30vw',
};

const content4 = {
  icons: icon4,
  title: 'Avoid contacts',
  para1: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested `,
  para2:
    'meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic ',
  images: image4,
  paraWidth: '30vw',
};
const WeDo = () => {
  return (
    <div className='wd_container' id='Prevention'>
      <Heading data={headingData} />
      <div style={{ marginTop: '10vh', marginLeft: '10vh' }}>
        <WeDoContents data={content1} />
        <WeDoContents data={content2} onLeft />
        <WeDoContents data={content3} />
        <WeDoContents data={content4} onLeft />
      </div>
      <img src={path1} className='wd_path1' />
      <img src={path2} className='wd_path2' />
      <img src={path3} className='wd_path3' />
    </div>
  );
};

export default WeDo;
