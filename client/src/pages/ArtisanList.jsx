// ===============================
// ArtisanList.jsx
// Page liste des artisans avec filtre par catégorie
// ===============================

import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../components/ArtisanList.scss";

// ===============================
// Import des images des artisans
// ===============================
import artisan1 from "../assets/boucher_boucherie_dumont_lyon.jpg";
import artisan2 from "../assets/boulanger_au_pain_chaud_montelimar.jpg";
import artisan3 from "../assets/chocolatier_chocolaterie_labbe_lyon.jpg";
import defaultImg from "../assets/artisan-exemple.jpg";

// ===============================
// Mapping des ID des artisans vers leurs images
// ===============================
const artisanPhotos = {
  1: artisan1,
  2: artisan2,
  3: artisan3,
};

// ===============================
// Catégories et métiers associés
// ===============================
const categories = {
  Services: ["Coiffeur", "Toiletteur", "Webdesign"],
  Bâtiment: ["Electricien", "Plombier", "Menuisier", "Chauffagiste", "Ferronier"],
  Fabrications: ["Bijoutier", "Couturier"],
  Alimentation: ["Boucher", "Boulanger", "Chocolatier", "Traiteur", "Fleuriste"],
};

// ===============================
// Clé API
// ===============================
const API_KEY = process.env.REACT_APP_API_KEY;

// ===============================
// Composant principal ArtisanList
// ===============================
const ArtisanList = () => {
  const location = useLocation();
  const [artisans, setArtisans] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [fadeKey, setFadeKey] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  console.log("🔹 ArtisanList.jsx : composant monté");

  const toggleMenu = () => {
    console.log("🔹 Menu catégorie togglé :", !isOpen);
    setIsOpen(!isOpen);
  };

  // ===============================
  // Charger les artisans depuis l'API locale via proxy React
  // ===============================
  useEffect(() => {
    console.log("🔹 fetch artisans lancé via proxy React vers backend local");
    console.log("🔹 URL utilisée : /api/artisans");
    console.log("🔹 Clé API utilisée : ", API_KEY);

    fetch(`/api/artisans`, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
    })
      .then((res) => {
        console.log("📤 Réponse brute du serveur :", res);
        if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("✅ Données reçues :", data);
        setArtisans(data);
        setFadeKey((prev) => prev + 1);
      })
      .catch((err) => console.error("❌ Erreur fetch artisans :", err));
  }, []);

  // ===============================
  // Définir la catégorie initiale si passée depuis le Header
  // ===============================
  useEffect(() => {
    if (location.state?.category) {
      console.log("🔹 Catégorie passée depuis le Header :", location.state.category);
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  // ===============================
  // Déclenche fade-in à chaque changement de catégorie
  // ===============================
  useEffect(() => {
    console.log("🔹 Changement de catégorie :", selectedCategory);
    setFadeKey((prev) => prev + 1);
  }, [selectedCategory]);

  // ===============================
  // Filtrage des artisans selon catégorie
  // ===============================
  const filteredArtisans = selectedCategory
    ? artisans.filter((artisan) => {
        const keep = categories[selectedCategory]?.includes(artisan.metier);
        console.log(`🔹 Artisan ${artisan.nom} (${artisan.metier}) filtré : ${keep}`);
        return keep;
      })
    : artisans;

  console.log("🔹 Liste finale des artisans affichés :", filteredArtisans);

  // ===============================
  // Rendu JSX
  // ===============================
  return (
    <div className="artisan-list-page fade-in" key={fadeKey}>
      <div className="list-header">
        <div className="title-category-wrapper">
          <h1 className="list-title">Liste des artisans</h1>

          {/* Menu déroulant pour catégories */}
          <div className="category-menu">
            <button className="main-button" onClick={toggleMenu}>
              {selectedCategory || "Choisir catégorie ▾"}
            </button>

            <div className={`category-options ${isOpen ? "open" : ""}`}>
              {Object.keys(categories).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    console.log("🔹 Catégorie sélectionnée :", cat);
                    setSelectedCategory(cat);
                    setIsOpen(false);
                  }}
                >
                  {cat}
                </button>
              ))}

              {selectedCategory && (
                <button
                  className="reset-button"
                  onClick={() => {
                    console.log("🔹 Réinitialisation du filtre catégorie");
                    setSelectedCategory(null);
                    setIsOpen(false);
                  }}
                >
                  Réinitialiser
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Grille des artisans */}
      <div className="artisan-grid">
        {filteredArtisans.length > 0 ? (
          filteredArtisans.map((artisan) => (
            <div className="artisan-card fade-in" key={artisan.id}>
              <div className="artisan-photo">
                <img src={artisanPhotos[artisan.id] || defaultImg} alt={artisan.nom} />
              </div>
              <div className="artisan-info">
                <h3>{artisan.nom}</h3>
                <p>Spécialité : {artisan.metier}</p>
                <p>Ville : {artisan.ville}</p>
              </div>
              <Link to={`/artisan/${artisan.id}`} className="btn-profile">
                Voir le profil
              </Link>
            </div>
          ))
        ) : (
          <p>Aucun artisan trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default ArtisanList;
