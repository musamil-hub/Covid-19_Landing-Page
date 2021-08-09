import React from 'react';
import WeDoParagraphs from './static/Paragraph/WeDoParagraphs';
import WeDoHeading from './static/Heading/WeDoHeading';
import './WeDoContents.css';
import Images from './static/ImageTag/Images';

const WeDoContents = ({ data, onLeft }) => {
  const imgLeft = onLeft ? false : true;

  return (
    <div className='wc_container'>
      {imgLeft && (
        <>
          <div className='wc_contents1'>
            <Images icons={data.icons} onIcon />
            <div className='wc_content2' style={{ width: '32vw' }}>
              <WeDoHeading title={data.title} />
              <WeDoParagraphs
                para1={data.para1}
                para2={data.para2}
                paraWidth={data.paraWidth}
              />
            </div>
          </div>
          <div className='wc_contents2'>
            <Images images={data.images} />
          </div>
        </>
      )}
      {!imgLeft && (
        <>
          <div className='wc_contents2'>
            <Images images={data.images} onLeft />
          </div>
          <div className='wc_contents1'>
            <Images icons={data.icons} onIcon />
            <div className='wc_content2' style={{ width: '32vw' }}>
              <WeDoHeading title={data.title} />
              <WeDoParagraphs
                para1={data.para1}
                para2={data.para2}
                paraWidth={data.paraWidth}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeDoContents;
