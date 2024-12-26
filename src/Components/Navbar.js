import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Shopping Cart</Link></li>
        <li><Link to="/user/username123">User Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
