import React from 'react';
import Map from './components/map';
import Selector from './components/selector';
import './styles/App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='box'>
        <Selector />
      </div>

      <Map />
    </div>
  );
};

export default App;
