import React, { useState } from 'react';
import './NavBar.css';
import AOS from 'aos';
import Logo from '../static/Logo/Logo';
import 'aos/dist/aos.css';

function NavBar() {
  AOS.init();
  const [open, setOpen] = useState(false);
  return (
    <div data-aos='fade-down' data-aos-delay='10' data-aos-duration='1000'>
      <nav className='container'>
        <Logo />
        <ul
          className='nav-links'
          style={{ transform: open ? 'translateX(0px)' : '' }}
        >
          <li>
            <a href='#Overview'>Overview</a>
          </li>
          <li>
            <a href='#Contagion'>Contagion</a>
          </li>
          <li>
            <a href='#Symptoms'>Symptoms</a>
          </li>
          <li>
            <a href='#Prevention'>Prevention</a>
          </li>
          <li>
            <button href='#' className='nav_button'>
              Contact
            </button>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className='fas fa-bars burger'></i>
      </nav>
    </div>
  );
}

export default NavBar;
