import React from 'react';
import Map from './components/map';
import './styles/App.css';

const App = () => {
  // TODO Add selector for different census data
  return (
    <div className='app'>
      <Map entry='AVERAGE_HOUSEHOLD_SIZE' />
    </div>
  );
};

export default App;
