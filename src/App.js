import React from 'react';
import Map from './components/map';
import Selector from './components/selector';
import './styles/App.css';

const App = () => {
  // TODO Add selector for different census data
  return (
    <div className='app'>
      <Selector />
      <Map />
    </div>
  );
};

export default App;
