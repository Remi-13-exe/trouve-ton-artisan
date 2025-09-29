// ===============================
// ArtisanDetail.jsx
// Page de détails d'un artisan avec contact
// ===============================

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Pour récupérer l'ID de l'artisan depuis l'URL
import defaultImg from "../assets/artisan-exemple.jpg"; // Image par défaut si artisan n'a pas de photo
import logo from "../assets/Logo.png"; // Logo pour le formulaire
import "../components/ArtisanDetail.scss"; // Styles spécifiques à cette page

// Import de toutes les images des artisans
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

// Mapping des ID des artisans vers leurs images
const artisanPhotos = {
  1: artisan1, 2: artisan2, 3: artisan3, 4: artisan4, 5: artisan5,
  6: artisan6, 7: artisan7, 8: artisan8, 9: artisan9, 10: artisan10,
  11: artisan11, 12: artisan12, 13: artisan13, 14: artisan14,
  15: artisan15, 16: artisan16, 17: artisan17,
};

// ===============================
// Composant principal ArtisanDetail
// ===============================
const ArtisanDetail = () => {
  const { id } = useParams(); // Récupère l'ID de l'artisan depuis l'URL
  const [artisan, setArtisan] = useState(null); // Stocke les données de l'artisan
  const [showContact, setShowContact] = useState(false); // Affiche ou masque le formulaire contact
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  }); // État du formulaire de contact
  const [successMsg, setSuccessMsg] = useState(""); // Message de succès ou erreur après envoi

  // ===============================
  // Récupération des infos de l'artisan depuis l'API
  // ===============================
  useEffect(() => {
    fetch(`http://localhost:5000/api/artisans/${id}`, {
      headers: { "x-api-key": "trouve-ton-artisan-2025-secret-cle" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Données artisan :", data);
        setArtisan(data); // Remplissage de l'état artisan
      })
      .catch((err) => console.error("❌ Erreur chargement artisan :", err));
  }, [id]);

  // Affiche un message de chargement si l'artisan n'est pas encore chargé
  if (!artisan) return <p>Chargement...</p>;

  // ===============================
  // Fonction pour afficher des étoiles en fonction de la note
  // ===============================
  const renderStars = (note) => {
    const totalStars = 5;
    return [...Array(totalStars)].map((_, i) => (
      <span key={i}>{i < note ? "⭐" : "☆"}</span>
    ));
  };

  // ===============================
  // Gestion des changements dans le formulaire
  // ===============================
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ===============================
  // Gestion de l'envoi du formulaire
  // ===============================
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log("📩 Tentative d'envoi :", formData);

    // Appel à l'API pour envoyer le message
    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "x-api-key": "trouve-ton-artisan-2025-secret-cle"
      },
      body: JSON.stringify({
        artisanId: artisan.id,
        ...formData,
      }),
    })
      .then((res) => {
        console.log("📤 Réponse brute du serveur :", res);
        if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("✅ Formulaire envoyé avec succès :", data);
        setSuccessMsg(
          "Message envoyé avec succès à l'artisan. Veuillez patienter le temps que l'artisan vous réponde."
        );
        // Réinitialisation du formulaire
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("❌ Erreur lors de l'envoi :", err);
        setSuccessMsg("Une erreur est survenue, veuillez réessayer plus tard.");
      });
  };

  // ===============================
  // Rendu JSX de la page
  // ===============================
  return (
    <div className="artisan-detail-page">

      {/* ===============================
          HEADER ARTISAN
      =============================== */}
      <div className="artisan-header">
        <img
          src={artisanPhotos[artisan.id] || defaultImg} // Photo de l'artisan ou par défaut
          alt={artisan.nom}
          className="artisan-photo"
        />
        <div className="artisan-info">
          <h1>{artisan.nom}</h1>
          <p className="note">{renderStars(artisan.note || 4)}</p>
          <p><strong>Métier :</strong> {artisan.metier}</p>
          <p><strong>Ville :</strong> {artisan.ville}</p>
          {artisan.site_web && (
            <p>
              <strong>Site web :</strong>{" "}
              <a href={artisan.site_web} target="_blank" rel="noreferrer">
                {artisan.site_web}
              </a>
            </p>
          )}
          <button className="btn-contact" onClick={() => setShowContact(true)}>
            Contacter
          </button>
        </div>
      </div>

      {/* ===============================
          DESCRIPTION DE L'ARTISAN
      =============================== */}
      {artisan.description && (
        <div className="artisan-about">
          <h2>À propos</h2>
          <p>{artisan.description}</p>
        </div>
      )}

      {/* ===============================
          MODAL CONTACT
      =============================== */}
      {showContact && (
        <div className="contact-modal">
          <div className="contact-form">

            {/* Header du formulaire avec logo et bouton fermer */}
            <div className="form-header">
              <img src={logo} alt="Logo" className="form-logo" />
              <button 
                className="btn-close" 
                onClick={() => {
                  setShowContact(false);
                  setSuccessMsg(""); // Reset message succès
                }}
              >
                ✖
              </button>
            </div>

            {/* Message de succès ou formulaire actif */}
            {successMsg ? (
              <div 
                className="form-success" 
                style={{ color: "#82b864", fontWeight: "bold", textAlign: "center", padding: "1rem" }}
              >
                {successMsg}
              </div>
            ) : (
              <form className="form-contact" onSubmit={handleSubmit}>
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="subject">Objet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit" className="btn-send">Envoyer</button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

// Export du composant pour utilisation dans App.js ou ailleurs
export default ArtisanDetail;
