// ===============================
// ArtisanList.jsx
// Page liste des artisans avec filtre par catégorie
// ===============================

import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // useLocation pour récupérer l'état passé par le header, Link pour naviguer vers la page artisan
import "../components/ArtisanList.scss";

// ===============================
// Import des images des artisans
// ===============================
import artisan1 from "../assets/boucher_boucherie_dumont_lyon.jpg";
import artisan2 from "../assets/boulanger_au_pain_chaud_montelimar.jpg";
import artisan3 from "../assets/chocolatier_chocolaterie_labbe_lyon.jpg";
import artisan4 from "../assets/traiteur_truchon_lyon.jpg";
import artisan5 from "../assets/chauffagiste_orville_salmons_evian.jpg";
import artisan6 from "../assets/electricien_mont_blanc_electricite_chamonix.jpg";
import artisan7 from "../assets/menuisier_boutot_et_fils_bourg_en_bresse.jpg";
import artisan8 from "../assets/plombier_vallis_bellemare_vienne.jpg";
import artisan9 from "../assets/bijoutier_claude_quinn_aix_les_bains.jpg";
import artisan10 from "../assets/couturier_amitee_lecuyer_annecy.jpg";
import artisan11 from "../assets/ferronier_ernest_carignan_le_puy_en_velay.jpg";
import artisan12 from "../assets/coiffeur_royden_charbonneau_saint_priest.jpg";
import artisan13 from "../assets/coiffeuse_leala_dennis_chambery.jpg";
import artisan14 from "../assets/salon_coiffure_cest_suphair_romans_sur_isere.jpg";
import artisan15 from "../assets/fleuriste_le_monde_des_fleurs_annonay.jpg";
import artisan16 from "../assets/toiletteuse_valerie_laderoute_valence.jpg";
import artisan17 from "../assets/webdesigner_cm_graphisme_valence.jpg";
import defaultImg from "../assets/artisan-exemple.jpg"; // Image par défaut si pas de photo

// ===============================
// Mapping des ID des artisans vers leurs images
// ===============================
const artisanPhotos = {
  1: artisan1, 2: artisan2, 3: artisan3, 4: artisan4, 5: artisan5,
  6: artisan6, 7: artisan7, 8: artisan8, 9: artisan9, 10: artisan10,
  11: artisan11, 12: artisan12, 13: artisan13, 14: artisan14,
  15: artisan15, 16: artisan16, 17: artisan17,
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
// Composant principal ArtisanList
// ===============================
const ArtisanList = () => {
  const location = useLocation(); // Permet de récupérer l'état passé depuis la navigation (ex : catégorie sélectionnée)
  const [artisans, setArtisans] = useState([]); // Liste de tous les artisans récupérés
  const [selectedCategory, setSelectedCategory] = useState(null); // Catégorie sélectionnée pour filtrer
  const [fadeKey, setFadeKey] = useState(0); // Clé pour déclencher animation fade-in à chaque changement
  const [isOpen, setIsOpen] = useState(false); // Gestion ouverture/fermeture menu catégories

  // Fonction pour ouvrir/fermer le menu déroulant
  const toggleMenu = () => setIsOpen(!isOpen);

  // ===============================
  // Charger les artisans depuis l'API
  // ===============================
  useEffect(() => {
    fetch("http://localhost:5000/api/artisans", {
      headers: { "x-api-key": "trouve-ton-artisan-2025-secret-cle" },
    })
      .then((res) => res.json())
      .then((data) => {
        setArtisans(data); // Remplissage de l'état avec les artisans
        setFadeKey((prev) => prev + 1); // Déclenche fade-in
      })
      .catch((err) => console.error("Erreur chargement artisans :", err));
  }, []);

  // ===============================
  // Définir la catégorie initiale si passée depuis le Header
  // ===============================
  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  // ===============================
  // Déclenche fade-in à chaque changement de catégorie
  // ===============================
  useEffect(() => {
    setFadeKey((prev) => prev + 1);
  }, [selectedCategory]);

  // ===============================
  // Filtrage des artisans selon catégorie
  // ===============================
  const filteredArtisans = selectedCategory
    ? artisans.filter((artisan) =>
        categories[selectedCategory]?.includes(artisan.metier)
      )
    : artisans;

  // ===============================
  // Rendu JSX
  // ===============================
  return (
    <div className="artisan-list-page fade-in" key={fadeKey}>
      
      {/* ===============================
          Header + sélection catégorie
      =============================== */}
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
                    setSelectedCategory(cat); // Filtre selon catégorie
                    setIsOpen(false); // Ferme le menu
                  }}
                >
                  {cat}
                </button>
              ))}

              {/* Bouton pour réinitialiser le filtre */}
              {selectedCategory && (
                <button
                  className="reset-button"
                  onClick={() => {
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

      {/* ===============================
          Grille des artisans
      =============================== */}
      <div className="artisan-grid">
        {filteredArtisans.length > 0 ? (
          filteredArtisans.map((artisan) => (
            <div className="artisan-card fade-in" key={artisan.id}>
              <div className="artisan-photo">
                {/* Affiche la photo ou image par défaut */}
                <img src={artisanPhotos[artisan.id] || defaultImg} alt={artisan.nom} />
              </div>
              <div className="artisan-info">
                <h3>{artisan.nom}</h3>
                <p>Spécialité : {artisan.metier}</p>
                <p>Ville : {artisan.ville}</p>
              </div>

              {/* Lien vers la page détail de l'artisan */}
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

// Export du composant pour utilisation dans App.js
export default ArtisanList;
