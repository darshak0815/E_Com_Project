import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <ul className="nav-links">
        <NavItem link="/" text="Home" />
        <NavItem link="/about" text="About" />
        <NavItem link="/contact" text="Contact " />
      </ul>
    </nav>
  );
};

const NavItem = ({ link, text }) => {
  return (
    <li className="nav-item">
      <a href={link} className="nav-link">{text}</a>
    </li>
  );
};

export default Navbar;
