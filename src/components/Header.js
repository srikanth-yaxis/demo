// src/components/Header.js
import React from 'react';
// import './Header.css';

const Header = () => (
  <header className="header">
    <img src="/path-to-logo.png" alt="Y Axis Logo" className="logo" />
    <nav className="progress-bar">
      <span className="step active">Trip Details</span>
      <span className="step">Your Info</span>
      <span className="step">Checkout</span>
    </nav>
  </header>
);

export default Header;
