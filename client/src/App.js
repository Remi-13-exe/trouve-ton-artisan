// ===============================
// App.jsx
// Composant principal de l'application React
// ===============================

import { useState, useEffect } from "react"; // Hooks React pour state et effets
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Routing SPA

// Import des pages et composants
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import ArtisanList from "./pages/ArtisanList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArtisanDetail from "./pages/ArtisanDetail";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";

// ===============================
// Composant App
// ===============================
function App() {
  // 🔹 State pour stocker la liste des artisans
  const [artisans, setArtisans] = useState([]);

  // 🔹 URL du backend depuis la variable d'environnement
  const API_URL = process.env.REACT_APP_API_URL;

  // 🔹 Charger les artisans depuis l'API au montage du composant
  useEffect(() => {
    fetch(`${API_URL}/api/artisans`, {
      headers: { "x-api-key": "trouve-ton-artisan-2025-secret-cle" }, // Clé API pour sécuriser la requête
    })
      .then((res) => res.json()) // Transforme la réponse en JSON
      .then((data) => setArtisans(data)) // Remplit le state avec les données
      .catch((err) => console.error("Erreur API artisans :", err)); // Gestion d'erreur
  }, [API_URL]); // 🔹 Dépendance sur API_URL pour que fetch se mette à jour si l'env change

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
