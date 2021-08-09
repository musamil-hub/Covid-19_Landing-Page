import React from 'react';
import Logos from '../../../images/logo.png';
const Logo = () => {
  return (
    <div className='logo'>
      <img className='logo_image' src={Logos} />
      <div className='logo_title'>Covid - 19</div>
    </div>
  );
};

export default Logo;
