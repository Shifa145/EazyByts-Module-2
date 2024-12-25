// src/components/Navbar.jsx
import React from 'react';
import '../assets/styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Stock Market Dashboard</h1>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Portfolio</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
