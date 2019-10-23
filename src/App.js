import React from 'react';
import Map from './components/map';
import Selector from './components/selector';
import './styles/App.css';
import Navbar from './layout/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='app'>
        <div className='columns'>
          <div className='column'>
            <div className='box'>
              <Selector />
            </div>
          </div>
          <div className='column'>
            <div className='box'>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
