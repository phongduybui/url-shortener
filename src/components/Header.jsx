/* eslint-disable */
import React from 'react';
import logo from '../images/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="header__navbar">
        <li className="nav-item">
          <a href="" className="nav-link">Features</a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">Pricing</a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">Resources</a>
        </li>
      </ul>
      <div className="header__button">
        <button className="btn btn--no-bg">Login</button>
        <button className="btn btn--rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
