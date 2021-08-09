import React from 'react';
import './ContagionContents.css';
import WearMask from '../../../../images/Contagion/WearMask.png';
import HandWash from '../../../../images/Contagion/HandWash.png';
import NoseRag from '../../../../images/Contagion/NoseRag.png';

const Dummy = [
  {
    image: WearMask,
    title: 'Air Transmission',
    content:
      'Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify',
    width: '22vw',
    marginTop: '-.9vh',
  },
  {
    image: HandWash,
    title: 'Human Contacts',
    content: 'Washing your hands is one of thesimplest ways you can protect',
    width: '20vw',
    marginTop: '-4vh',
  },
  {
    image: NoseRag,
    title: 'Containted Objects',
    content:
      'Use the tissue while sneezing,In this way, you can protect your droplets.',
    width: '20vw',
    marginTop: '0',
  },
];

const ContagionContents = () => {
  return (
    <div className='au_pathvirus-img'>
      <div className='cc_container'>
        {Dummy.map((data, idx) => (
          <div className='Wear-mask_1' key={idx}>
            <div className='Wear-mask_img'>
              <img
                src={data.image}
                style={{
                  width: '16vw',
                  objectFit: 'contain',
                  marginTop: `${data.marginTop}`,
                }}
              />
            </div>
            <div className='Wear-mask_contents'>
              <div className='Wear-mask_content1'>{data.title}</div>
              <div
                className='Wear-mask_content2'
                style={{ width: `${data.width}` }}
              >
                {data.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContagionContents;
