// ContactNavbar.js
import React from 'react';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">Contact Manager</div>
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Add Contact</a></li>
        <li><a href="#">View Contacts</a></li>
        <li><a href="#">Search Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Header;
