import React from 'react'; 
// Import de React (même si ici on n'utilise pas de hooks, c'est requis pour JSX)

import { Link } from 'react-router-dom'; 
// Import de Link de react-router-dom pour gérer la navigation interne sans recharger la page

import './Footer.scss'; 
// Import du fichier de styles SCSS associé au footer


// Définition du composant Footer
const Footer = () => {
  return (
    // Élément <footer> pour la sémantique HTML (zone pied de page)
    <footer className="footer fade-in">
      
      {/* Conteneur principal pour le contenu du footer */}
      <div className="footer-content">

        {/* Navigation dans le footer */}
        <nav>
          <ul className="footer-links">
            
            {/* Chaque <li> correspond à un lien de navigation */}
            <li><Link to="/UnderConstruction">Mentions légales</Link></li>
            <li><Link to="/UnderConstruction">Données personnelles</Link></li>
            <li><Link to="/UnderConstruction">101 cours Charlemagne</Link></li>
            <li><Link to="/UnderConstruction">C5 20033</Link></li>
            <li><Link to="/UnderConstruction">Accessibilité</Link></li>
            <li><Link to="/UnderConstruction">France</Link></li>

            {/* Numéro de téléphone, stylisé différemment via la classe "footer-phone" */}
            <li className="footer-phone">
              <Link to="/*">+33 (0) 4 26 73 40 00</Link>
            </li>

          </ul>
        </nav>
      </div>
    </footer>
  );
};

// Exportation du composant pour l'utiliser ailleurs
export default Footer;
