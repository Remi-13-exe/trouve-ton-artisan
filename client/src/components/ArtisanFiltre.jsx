// Import de React (obligatoire pour utiliser JSX et définir des composants fonctionnels)
import React from "react";

// Import du hook useLocation depuis react-router-dom
// Ce hook permet de récupérer les informations sur l’URL actuelle (chemin, query params, state, etc.)
import { useLocation } from "react-router-dom";

// Définition du composant fonctionnel ArtisanFiltre
// C’est un composant affichant une liste d’artisans en fonction d’une catégorie sélectionnée
const ArtisanFiltre = () => {
  // Récupération de l'objet "location" fourni par react-router
  // Il contient plusieurs propriétés : pathname, search, state, etc.
  const location = useLocation();

  // On extrait "selectedCategory" depuis location.state (si l’utilisateur est arrivé ici via un "navigate" avec un state)
  // Si aucune catégorie n’est transmise, alors la valeur par défaut sera "null"
  const selectedCategory = location.state?.selectedCategory || null;

  // JSX renvoyé par le composant
  return (
    <div className="artisan-filtre-page"> {/* Conteneur principal de la page de filtrage */}
      
      {/* Titre affiché au-dessus de la liste des artisans */}
      <h2 className="filtered-title">
        {
          selectedCategory
            ? `Artisans du secteur ${selectedCategory}` // Si une catégorie est choisie, on l’affiche
            : "Tous les artisans"                      // Sinon, on affiche un titre générique
        }
      </h2>

      {/* Composant enfant (à créer/importer) qui affiche réellement la liste des artisans */}
      {/* On lui transmet la catégorie sélectionnée en prop */}
      <ArtisanList selectedCategory={selectedCategory} />
    </div>
  );
};

// Export du composant pour pouvoir l’utiliser dans d’autres fichiers
export default ArtisanFiltre;
