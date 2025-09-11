import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul className="footer-links">
          <li><Link to="/">Mentions légales</Link></li>
          <li><Link to="/artisans">Données personnelles</Link></li>
          <li><Link to="/">101 cours Charlemagne</Link></li>
          <li><Link to="/">C5 20033</Link></li>
          <li><Link to="/">Accessibilité</Link></li>
          <li><Link to="/">France</Link></li>
          <li className="footer-phone">
            <Link to="/">+33 (0) 4 26 73 40 00</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
