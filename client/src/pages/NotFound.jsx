// ===============================
// NotFound.jsx
// Page affichée lorsque l'utilisateur navigue vers une route inexistante (404)
// ===============================

import React from "react"; // Import de React
import { Link } from "react-router-dom"; // Import du composant Link pour navigation interne
import errorImage from "../assets/erreur_404_artisan.jpg"; // Image illustrant l'erreur 404
import '../components/NotFound.scss'; // Styles spécifiques à la page NotFound

// ===============================
// Composant NotFound
// ===============================
const NotFound = () => {
  return (
    <div className="notfound-page">
      {/* Image illustrant la page introuvable */}
      <img 
        src={errorImage} 
        alt="Page non trouvée" 
        className="notfound-image" 
      />

      {/* Titre principal */}
      <h1>Page non trouvée</h1>

      {/* Message d'information */}
      <p>La page que vous avez demandée n'existe pas ou a été déplacée.</p>

      {/* Bouton de retour à l'accueil */}
      <Link to="/" className="btn-home">
        Retour à l'accueil
      </Link>
    </div>
  );
};

// Export du composant pour utilisation dans App.js
export default NotFound;
