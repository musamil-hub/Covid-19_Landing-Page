import React from 'react';
import HeroPage from './components/HeroPage/HeroPage';
import AboutUs from './components/AboutUs/AboutUs';
import Contagion from './components/Contagion/Contagion';
import Symptomps from './components/Symptomps/Symptomps';
import NavBar from './components/NavBar/NavBar';
import WeDo from './components/What_Should/WeDo';
import MapToFooter from './components/MapToFooter/MapToFooter';

function App() {
  return (
    <div>
      <NavBar />
      <HeroPage />
      <AboutUs />
      <Contagion />
      <Symptomps />
      <WeDo />
      <MapToFooter />
    </div>
  );
}

export default App;
