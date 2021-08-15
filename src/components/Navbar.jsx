/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = ({ collapse }) => {
  return (
    <div className={`navbar ${collapse ? 'navbar--collapse' : ''}`}>
      <ul className='navbar__menu'>
        <li className='nav-item'>
          <a href='javascript:void(0)' className='nav-link active'>
            Features
          </a>
        </li>
        <li className='nav-item'>
          <a href='javascript:void(0)' className='nav-link'>
            Pricing
          </a>
        </li>
        <li className='nav-item'>
          <a href='javascript:void(0)' className='nav-link'>
            Resources
          </a>
        </li>
      </ul>
      <div className='navbar__button'>
        <button className='btn btn--no-bg'>
          <span>Login</span>
        </button>
        <button className='btn btn--rounded'>
          <span>Sign Up</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
