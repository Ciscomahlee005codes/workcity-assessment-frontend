import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} WorkCity Limited. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
