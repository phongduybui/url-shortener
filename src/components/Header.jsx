/* eslint-disable */
import React from 'react';
import logo from '../images/logo.svg';
import Burger from './Burger';
// import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <Burger />
    </header>
  );
};

export default Header;
