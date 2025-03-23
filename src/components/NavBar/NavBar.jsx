import React, { useState, useEffect } from 'react';
import './navbar.css';
import { ToggleDarkMode } from '../ToggleDarkMode/ToggleDarkMode';
import { useScrolls } from '../../hooks/useScrolls';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {scrollToSection,scrolled} = useScrolls(setIsMenuOpen)
  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">AK</div>
        <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id} className="nav-item">
              <a onClick={() => scrollToSection(item.id)} className="nav-link">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <ToggleDarkMode />
    </nav>
  );
};

export default NavBar;