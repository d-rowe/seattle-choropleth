import React from 'react';

const Navbar = () => (
  <nav
    className='navbar is-primary has-shadow'
    role='navigation'
    aria-label='main navigation'
  >
    <div className='navbar-brand'>
      <div className='navbar-item' href='/'>
        <h1>Seattle Census Data</h1>
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
