// ===============================
// App.jsx
// Composant principal de l'application React
// ===============================

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
// Clé API et URL Railway
// ===============================
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

// ===============================
// Composant App
// ===============================
function App() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    console.log("🔹 App.jsx : fetch artisans lancé vers Railway");
    console.log(`🔹 URL utilisée : ${API_URL}/api/artisans`);
    console.log(`🔹 Clé API utilisée : ${API_KEY}`);

  fetch(`/api/artisans`, {
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": API_KEY,
  },
})

      .then((res) => {
        console.log("📤 App.jsx : réponse brute du serveur :", res);
        if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("✅ App.jsx : données artisans reçues :", data);
        setArtisans(data);
      })
      .catch((err) => console.error("❌ App.jsx : erreur fetch artisans :", err));
  }, []);

  return (
    <Router>
      <Header allArtisans={artisans} />
      <ScrollToTop />
      <Routes>
        <Route path="/artisan/:id" element={<ArtisanDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/liste-artisans" element={<ArtisanList artisans={artisans} />} />
        <Route path="/UnderConstruction" element={<UnderConstruction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
