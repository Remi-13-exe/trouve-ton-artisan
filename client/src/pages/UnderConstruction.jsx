// ===============================
// UnderConstruction.jsx
// Page affichée pour les pages encore en construction
// ===============================

import { Link } from "react-router-dom"; // Import du Link pour navigation interne SPA
import '../components/UnderConstruction.scss'; // Import du SCSS pour styles personnalisés

// ===============================
// Composant UnderConstruction
// ===============================
const UnderConstruction = () => {
  return (
    // Conteneur principal centré verticalement et horizontalement
    <div className="underconstruction-container d-flex justify-content-center align-items-center vh-100 text-center bg-light">
      
      {/* Contenu principal avec padding, arrondi, ombre et fond blanc */}
      <div className="underconstruction-content p-5 rounded shadow-lg bg-white">
        
        {/* Titre principal avec emojis et animation fadeInDown */}
        <h1 className="display-3 fw-bold text-danger mb-4 animate__animated animate__fadeInDown">
          🚧 Page en construction 🚧
        </h1>

        {/* Texte explicatif avec animation fadeInUp */}
        <p className="lead text-secondary mb-4 animate__animated animate__fadeInUp">
          Cette page sera bientôt disponible. Merci de votre patience !
        </p>

        {/* Bouton pour retourner à l'accueil avec animation pulse infinie */}
        <Link 
          to="/" 
          className="btn-custom animate__animated animate__pulse animate__infinite"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

// Export du composant pour utilisation dans App.js ou ailleurs
export default UnderConstruction;
