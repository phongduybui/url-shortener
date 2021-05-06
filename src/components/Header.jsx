/* eslint-disable */
import React from 'react';
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="header__navbar">
        <li className="nav-item">
          <a href="#" className="nav-link active">Features</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Pricing</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Resources</a>
        </li>
      </ul>
      <div className="header__button">
        <button className="btn btn--no-bg"><span>Login</span></button>
        <button className="btn btn--rounded"><span>Sign Up</span></button>
      </div>
    </header>
  );
};

export default Header;
