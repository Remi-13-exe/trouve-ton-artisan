import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import './Header.scss';

const Navbar = () => {
  // ✅ Fonction de recherche
  const handleSearch = () => {
    console.log('Recherche lancée 🚀');
    // Ici tu pourras déclencher ton appel API ou ton filtrage
  };

  return (
    <header className="custom-header">
      {/* Logo */}
      <Link to="/" className="d-inline-block">
        <img
          src={logo}
          alt="Logo"
          className="img-fluid logo"
          style={{ maxWidth: '120px', height: 'auto' }}
        />
      </Link>

      {/* Navbar */}
      <aside className="navbar-right">
        <ul className="navbar-list">
          <li>Bâtiment</li>
          <li>Services</li>
          <li>Fabrications</li>
          <li>Alimentation</li>
        </ul>

        {/* Barre de recherche intégrée */}
       <div className="search-wrapper">
  <input
    type="text"
    className="search-input"
    placeholder="Rechercher un artisan..."
    onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
  />
  <button
    type="button"
    className="search-btn"
    onClick={handleSearch}
    aria-label="Lancer la recherche"
  >
    <i className="bi bi-search"></i>
  </button>
</div>

      </aside>
    </header>
  );
};

export default Navbar;

