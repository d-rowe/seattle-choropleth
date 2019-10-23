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
        <div class='columns'>
          <div class='column'>
            <div className='box'>
              <Selector />
            </div>
          </div>
          <div class='column'>
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
