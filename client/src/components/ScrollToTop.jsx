// ===========================
// ScrollToTop.jsx
// Composant React pour remettre le scroll en haut de page à chaque changement de route
// ===========================

import { useEffect } from "react";         // Import du hook useEffect pour gérer les effets secondaires
import { useLocation } from "react-router-dom"; // Import de useLocation pour connaître la route actuelle

const ScrollToTop = () => {
  // Récupère le pathname (chemin URL) de la route courante
  const { pathname } = useLocation();

  // useEffect s'exécute à chaque changement de pathname
  useEffect(() => {
    // Remet le scroll en haut de page (x = 0, y = 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Dépendance : se déclenche uniquement quand le chemin change

  // Ce composant n'affiche rien, il agit uniquement via l'effet secondaire
  return null;
};

export default ScrollToTop; // Export du composant pour l'utiliser dans App.jsx ou ailleurs
