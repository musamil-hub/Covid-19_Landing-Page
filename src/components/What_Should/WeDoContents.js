import React from 'react';
import './WeDoContents.css';

import Images from './ImageTag/Images';
import Headings from '../static/Headings/Headings';
import Paragraph from '../static/Paragraph/Paragraph';

const WeDoContents = ({ data, index }) => {
  const imgLeft = index % 2 === 0 ? true : false;
  return (
    <div className='wc_container'>
      {imgLeft && (
        <div
          style={{ display: 'flex' }}
          data-aos='fade-up'
          data-aos-easing='ease-in-sine'
        >
          <div className='wc_contents1'>
            <Images count={data.count} onIcon />
            <div className='wc_content2' style={{ width: '32vw' }}>
              <Headings heading={data.datas.title} Left small normal />
              <Paragraph
                paragraph2={{
                  para1: `${data.datas.para1}`,
                  para2: `${data.datas.para2}`,
                }}
                width={data.datas.paraWidth}
                Left
              />
            </div>
          </div>
          <div className='wc_contents2'>
            <Images images={data.datas.images} />
          </div>
        </div>
      )}
      {!imgLeft && (
        <div
          style={{ display: 'flex' }}
          data-aos='fade-up'
          data-aos-easing='ease-in-sine'
        >
          <div className='wc_contents2'>
            <Images images={data.datas.images} onLeft />
          </div>
          <div className='wc_contents1' style={{ marginLeft: '-2vw' }}>
            <Images count={data.count} onIcon count={data.count} />
            <div className='wc_content2' style={{ width: '32vw' }}>
              <Headings heading={data.datas.title} Left small normal />
              <Paragraph
                paragraph2={{
                  para1: `${data.datas.para1}`,
                  para2: `${data.datas.para2}`,
                }}
                width={data.datas.paraWidth}
                Left
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeDoContents;
