import React from 'react';
import Logo from '../../static/Logo/Logo';
import './Footer.css';
import Facebook from '../../../images/Footer/facebook.png';
import Vue from '../../../images/Footer/vue.png';
import Twitter from '../../../images/Footer/twitter.png';
import Youtube from '../../../images/Footer/youtube.png';

const socialMedia = [
  { title: Facebook, links: 'https://www.facebook.com/MyGovIndia/' },
  { title: Youtube, links: 'https://www.youtube.com/mygovindia' },
  { title: Vue, links: 'https://www.instagram.com/mygovindia' },
  { title: Twitter, links: 'https://twitter.com/mygovindia' },
];

const links = ['Overview', 'Symptoms', 'Prevention', 'Treatment'];

const Footer = () => {
  return (
    <div className='footers'>
      <div className='footer_container'>
        <div className='footer_contents'>
          <div className='logo'>
            <Logo />
          </div>
          <div className='footer_lists'>
            <ul className='footer_list'>
              {links.map(data => (
                <li key={data}>
                  <a href={`#${data}`} className='fo_li'>
                    {data}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='footer_url'>
            {socialMedia.map(data => (
              <a
                href={data.links}
                target='_blank'
                style={{ margin: 'auto 0' }}
                key={data.links}
              >
                <img src={data.title} className='social' />
              </a>
            ))}
          </div>
        </div>
        <div className='footer_copyrights'>
          2020 @ All rights reserved by pixelspark.co
        </div>
      </div>
    </div>
  );
};

export default Footer;
