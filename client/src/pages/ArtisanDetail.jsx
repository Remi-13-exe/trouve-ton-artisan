// ===============================
// ArtisanDetail.jsx
// Page de détails d'un artisan avec contact
// ===============================

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultImg from "../assets/artisan-exemple.jpg";
import logo from "../assets/Logo.png";
import "../components/ArtisanDetail.scss";

// Import images des artisans
import artisan1 from "../assets/boucher_boucherie_dumont_lyon.jpg";
import artisan2 from "../assets/boulanger_au_pain_chaud_montelimar.jpg";
import artisan3 from "../assets/chocolatier_chocolaterie_labbe_lyon.jpg";

// Mapping des ID vers images
const artisanPhotos = {
  1: artisan1,
  2: artisan2,
  3: artisan3,
};

// ===============================
// Clé API
// ===============================
const API_KEY = process.env.REACT_APP_API_KEY;

// ===============================
// Composant principal
// ===============================
const ArtisanDetail = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [successMsg, setSuccessMsg] = useState("");

  console.log("🔹 ArtisanDetail.jsx : composant monté, id =", id);

  // ===============================
  // Fetch artisan via proxy React pour éviter CORS
  // ===============================
  useEffect(() => {
    console.log(`🔹 Fetch artisan ${id} lancé via proxy React`);
    console.log(`🔹 URL utilisée : /api/artisans/${id}`);
    console.log(`🔹 Clé API utilisée : ${API_KEY}`);

    fetch(`/api/artisans/${id}`, {
      headers: { 
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
    })
      .then((res) => {
        console.log("📤 Réponse brute :", res);
        if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("✅ Artisan reçu :", data);
        setArtisan(data);
      })
      .catch((err) => console.error("❌ Erreur fetch artisan :", err));
  }, [id]);

  if (!artisan) return <p>Chargement...</p>;

  // ===============================
  // Fonction étoiles
  // ===============================
  const renderStars = (note) => {
    const totalStars = 5;
    return [...Array(totalStars)].map((_, i) => <span key={i}>{i < note ? "⭐" : "☆"}</span>);
  };

  // ===============================
  // Formulaire contact
  // ===============================
  const handleChange = (e) => {
    console.log("🔹 Formulaire change :", e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📩 Tentative d'envoi :", formData);

    fetch(`/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ artisanId: artisan.id, ...formData }),
    })
      .then((res) => {
        console.log("📤 Réponse brute du serveur :", res);
        if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("✅ Formulaire envoyé :", data);
        setSuccessMsg("Message envoyé avec succès à l'artisan.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("❌ Erreur envoi formulaire :", err);
        setSuccessMsg("Une erreur est survenue, veuillez réessayer.");
      });
  };

  // ===============================
  // Rendu JSX
  // ===============================
  return (
    <div className="artisan-detail-page">
      <div className="artisan-header">
        <img src={artisanPhotos[artisan.id] || defaultImg} alt={artisan.nom} className="artisan-photo" />
        <div className="artisan-info">
          <h1>{artisan.nom}</h1>
          <p className="note">{renderStars(artisan.note || 4)}</p>
          <p><strong>Métier :</strong> {artisan.metier}</p>
          <p><strong>Ville :</strong> {artisan.ville}</p>
          {artisan.site_web && (
            <p>
              <strong>Site web :</strong>{" "}
              <a href={artisan.site_web} target="_blank" rel="noreferrer">{artisan.site_web}</a>
            </p>
          )}
          <button className="btn-contact" onClick={() => { console.log("🔹 Ouvrir contact"); setShowContact(true); }}>
            Contacter
          </button>
        </div>
      </div>

      {artisan.description && (
        <div className="artisan-about">
          <h2>À propos</h2>
          <p>{artisan.description}</p>
        </div>
      )}

      {showContact && (
        <div className="contact-modal">
          <div className="contact-form">
            <div className="form-header">
              <img src={logo} alt="Logo" className="form-logo" />
              <button className="btn-close" onClick={() => { console.log("🔹 Fermer contact"); setShowContact(false); setSuccessMsg(""); }}>✖</button>
            </div>

            {successMsg ? (
              <div style={{ color: "#82b864", fontWeight: "bold", textAlign: "center", padding: "1rem" }}>
                {successMsg}
              </div>
            ) : (
             <form className="form-contact" onSubmit={handleSubmit}>
               <label>Nom</label>
               <input name="name" value={formData.name} onChange={handleChange} required />
               <label>Email</label>
               <input type="email" name="email" value={formData.email} onChange={handleChange} required />
               <label>Objet</label>
               <input name="subject" value={formData.subject} onChange={handleChange} required />
               <label>Message</label>
               <textarea name="message" value={formData.message} onChange={handleChange} rows={4} required></textarea>
               <button type="submit" className="btn-send">Envoyer</button>
             </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtisanDetail;
