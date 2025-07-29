import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo">WorkCity.</div>

        {/* Desktop Nav Links */}
        <ul className="nav-links desktop-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutUs">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="signUp-btn desktop-signup" onClick={handleSignUp}>Sign Up</button>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>☰</div>

        {/* Mobile Menu */}
        <ul className={`nav-links mobile-menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#aboutUs" onClick={toggleMenu}>About Us</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <li>
            <button className="signUp-btn mobile-signup-btn" onClick={handleSignUp}>Sign Up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
