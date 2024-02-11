import React, { useState, useEffect } from 'react';
import Info from './components/Info/Info';
import Info2 from './components/Info2/Info2';
import Map from './components/Map/Map';
import './app.css';


const App = () => {
  return(
    <div className="bodyBackgroundColor">
    <Info />
    <Info2 />
    <Map className="map" />
    <div style={{left: 118, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 48, fontFamily: 'Mea Culpa', fontWeight: '400', wordWrap: 'break-word'}}> 
      Lorem ipsum dolor
    </div>
    </div>
  );
};
export default App


