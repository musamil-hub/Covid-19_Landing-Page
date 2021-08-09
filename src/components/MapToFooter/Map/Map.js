import React from 'react';
import './Map.css';
import LiveReport from '../Map/LiveReport/LiveReport';
import MapNav from '../../../images/Map/MapNav.png';
import MapImg from '../../../images/Map/Maps.png';
import Search from '../../../images/Map/Search.png';
const Map = () => {
  return (
    <div className='map_container'>
      <div className='map_contents'>
        <img src={MapImg} width='56%' className='MapImg' />
        <div className='maps'>
          <img src={MapNav} width='9.5%' className='MapNav' />
          <img src={Search} width='11%' className='Search' />
        </div>
        <div className='map_pagination'>
          <LiveReport />
        </div>
      </div>
    </div>
  );
};
export default Map;
