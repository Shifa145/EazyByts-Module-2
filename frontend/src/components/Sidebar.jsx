import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles.css';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Menu</h2>
      <ul className="sidebar-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/stocks">Stocks</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
