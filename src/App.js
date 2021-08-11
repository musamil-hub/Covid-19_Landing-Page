import React, { useEffect } from 'react';
import './App.css';
import HeroPage from './components/HeroPage/HeroPage';
import AboutUs from './components/AboutUs/AboutUs';
import Contagion from './components/Contagion/Contagion';
import Symptomps from './components/Symptomps/Symptomps';
import NavBar from './components/NavBar/NavBar';
import WeDo from './components/What_Should/WeDo';
import MapToFooter from './components/MapToFooter/MapToFooter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import datas from './Data/datas.json';
function App() {
  AOS.init({ duration: 1200 });
  return (
    <div className='app'>
      <NavBar />
      <HeroPage />
      <AboutUs />
      <Contagion />
      <Symptomps />
      <WeDo content={datas.wedo.wedocontent} heading={datas.wedo.wedoHeading} />
      <MapToFooter />
    </div>
  );
}

export default App;
