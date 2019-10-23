import React from 'react';
import '../styles/layout/navbar.css';

const Navbar = () => (
  <nav
    className='navbar is-link box'
    role='navigation'
    aria-label='main navigation'
  >
    <div className='navbar-brand'>
      <div className='navbar-item' href='/'>
        <h1>Seattle Choropleth Map</h1>
      </div>
      <div
        role='button'
        className='navbar-burger burger'
        aria-label='menu'
        aria-expanded='false'
        data-target='navbarBasicExample'
      >
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
      </div>
    </div>

    <div className='navbar-menu'>
      <div className='navbar-start'>
        {/* <p className='navbar-item'>Source</p> */}
      </div>
    </div>
  </nav>
);

export default Navbar;
