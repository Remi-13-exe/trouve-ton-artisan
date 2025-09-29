// Importation des dépendances React et outils
import React, { useState, useEffect } from 'react'; // hooks pour gérer l'état et les effets
import { Link, useNavigate } from 'react-router-dom'; // navigation entre pages
import logo from '../assets/Logo.png'; // import du logo
import './Header.scss'; // styles spécifiques

// ==========================
// Données temporaires d’artisans
// (dans une vraie app : récupérées depuis une API ou une BDD)
// ==========================
const artisansData = [
  { id: 1, nom: 'Boucherie Dumont', metier: 'Boucher', ville: 'Lyon' },
  { id: 2, nom: 'Au pain chaud', metier: 'Boulanger', ville: 'Montélimar' },
  { id: 3, nom: 'Chocolaterie Labbé', metier: 'Chocolatier', ville: 'Lyon' },
  { id: 4, nom: 'Traiteur Truchon', metier: 'Traiteur', ville: 'Lyon' },
  { id: 5, nom: 'Orville Salmons', metier: 'Chauffagiste', ville: 'Evian' },
  { id: 6, nom: 'Mont Blanc Eléctricité', metier: 'Electricien', ville: 'Chamonix' },
];

// ==========================
// Composant Navbar
// ==========================
const Navbar = () => {
  // État qui gère l’ouverture/fermeture du menu burger
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Texte entré dans la barre de recherche
  const [searchTerm, setSearchTerm] = useState('');

  // Résultats filtrés des artisans (par défaut : tous)
  const [filteredArtisans, setFilteredArtisans] = useState(artisansData);

  // Hook pour naviguer programmétiquement
  const navigate = useNavigate();

  // 👉 Fonction pour ouvrir/fermer le menu burger
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // ==========================
  // Effet : filtrage en direct (live search)
  // ==========================
  useEffect(() => {
    const results = artisansData
      .filter((artisan) =>
        artisan.nom.toLowerCase().includes(searchTerm.toLowerCase()) // recherche insensible à la casse
      )
      .sort((a, b) => a.nom.localeCompare(b.nom)); // tri alphabétique
    setFilteredArtisans(results); // mise à jour des résultats
  }, [searchTerm]); // déclenché à chaque changement de "searchTerm"

  // ==========================
  // Lancer une recherche complète
  // redirige vers /liste-artisans avec les résultats filtrés
  // ==========================
  const handleSearch = () => {
    navigate("/liste-artisans", { state: { filteredArtisans } });
  };

  // ==========================
  // Navigation via une catégorie
  // Exemple : "Bâtiment", "Services"
  // ==========================
  const handleCategoryClick = (category) => {
    setIsMenuOpen(false); // referme le menu burger
    navigate("/liste-artisans", { state: { category } }); // passe la catégorie à la page
  };

  // ==========================
  // Sélection d’un artisan depuis les résultats live
  // Redirige directement sur sa page profil
  // ==========================
  const handleSelectArtisan = (artisan) => {
    navigate(`/artisan/${artisan.id}`); // ouvre la page artisan
    setSearchTerm(''); // reset du champ recherche
    setIsMenuOpen(false); // ferme le menu burger
  };

  // ==========================
  // Rendu JSX
  // ==========================
  return (
    <header className="custom-header fade-in">
      {/* Logo cliquable → retour à l’accueil */}
      <Link to="/" className="d-inline-block">
        <img
          src={logo}
          alt="Logo"
          className="img-fluid logo"
          style={{ maxWidth: '7.5rem', height: 'auto' }} // taille fixée
        />
      </Link>

      <aside className="navbar-right">
        {/* Menu burger (3 barres) */}
        <div className="burger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Contenu du menu : catégories + recherche */}
        <div className={`navbar-content ${isMenuOpen ? "active" : ""}`}>
          {/* Liste des catégories */}
          <ul className="navbar-list">
            <li onClick={() => handleCategoryClick("Bâtiment")}>Bâtiment</li>
            <li onClick={() => handleCategoryClick("Services")}>Services</li>
            <li onClick={() => handleCategoryClick("Fabrications")}>Fabrications</li>
            <li onClick={() => handleCategoryClick("Alimentation")}>Alimentation</li>
          </ul>

          {/* Champ de recherche */}
          <div className="search-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Rechercher un artisan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // mise à jour de searchTerm
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch(); // lancer recherche avec Entrée
              }}
            />
            <button
              type="button"
              className="search-btn"
              onClick={handleSearch}
              aria-label="Lancer la recherche"
            >
              <i className="bi bi-search search-icon"></i>
            </button>
          </div>

          {/* ==========================
              Résultats live de la recherche
          ========================== */}
          {searchTerm && (
            <div className="live-search-results">
              {filteredArtisans.length > 0 ? (
                filteredArtisans.map((artisan) => (
                  <div
                    key={artisan.id}
                    className="artisan-result-card"
                    onClick={() => handleSelectArtisan(artisan)}
                  >
                    <strong>{artisan.nom}</strong> - {artisan.metier} ({artisan.ville})
                  </div>
                ))
              ) : (
                <div className="artisan-result-card">Aucun artisan trouvé 😢</div>
              )}
            </div>
          )}
        </div>
      </aside>
    </header>
  );
};

// Export du composant
export default Navbar;
