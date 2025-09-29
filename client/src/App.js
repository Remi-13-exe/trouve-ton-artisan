// ===============================
// App.jsx
// Composant principal de l'application React
// ===============================

import { useState, useEffect } from "react"; // Hooks React pour state et effets
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Routing SPA

// Import des pages et composants
import Home from "./pages/Home"; // Page d'accueil
import ScrollToTop from "./components/ScrollToTop"; // Composant pour scroll en haut à chaque navigation
import ArtisanList from "./pages/ArtisanList"; // Page liste des artisans
import Header from "./components/Header"; // Composant Header / Navbar
import Footer from "./components/Footer"; // Composant Footer
import ArtisanDetail from "./pages/ArtisanDetail"; // Page détail d'un artisan
import NotFound from "./pages/NotFound"; // Page 404
import UnderConstruction from "./pages/UnderConstruction"; // Page en construction

// ===============================
// Composant App
// ===============================
function App() {
  // State pour stocker la liste des artisans
  const [artisans, setArtisans] = useState([]);

  // useEffect pour charger les artisans depuis l'API au montage du composant
  useEffect(() => {
    fetch("http://localhost:5000/api/artisans", {
      headers: { "x-api-key": "trouve-ton-artisan-2025-secret-cle" }, // Clé API pour sécuriser la requête
    })
      .then((res) => res.json()) // Transforme la réponse en JSON
      .then((data) => setArtisans(data)) // Remplit le state avec les données
      .catch((err) => console.error("Erreur API artisans :", err)); // Gestion d'erreur
  }, []); // [] → effet exécuté une seule fois au montage

  return (
    // Router principal pour gérer la navigation
    <Router>
      {/* Header global, reçoit tous les artisans pour la recherche live */}
      <Header allArtisans={artisans} />

      {/* Scroll automatique en haut à chaque changement de page */}
      <ScrollToTop />

      {/* Définition des routes de l'application */}
      <Routes>
        {/* Route pour page détail d'un artisan avec paramètre dynamique id */}
        <Route path="/artisan/:id" element={<ArtisanDetail />} />

        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Route pour la liste des artisans, reçoit le state artisans en prop */}
        <Route path="/liste-artisans" element={<ArtisanList artisans={artisans} />} />

        {/* Route pour page en construction */}
        <Route path="/UnderConstruction" element={<UnderConstruction />} />

        {/* Route catch-all pour les pages inexistantes */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer global */}
      <Footer />
    </Router>
  );
}

// Export du composant App pour le montage dans index.js
export default App;
