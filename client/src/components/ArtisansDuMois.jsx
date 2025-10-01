import { useEffect, useState } from "react";
import artisanExemple from "../assets/artisan-exemple.jpg";
import './Artisan-of-the-month.scss';

// Clé API et URL Railway
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const ArtisansDuMois = () => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    console.log("🔹 ArtisansDuMois.jsx : fetch artisans du mois lancé vers Railway");
    console.log(`🔹 URL utilisée : ${API_URL}/api/artisans/du-mois`);
    console.log(`🔹 Clé API utilisée : ${API_KEY}`);

    fetch(`/api/artisans/du-mois`, {
      headers: { 'x-api-key': API_KEY }
    })
      .then((res) => {
        console.log("📤 Réponse brute :", res);
        if (!res.ok) throw new Error(`Erreur ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("✅ Artisans du mois reçus :", data);
        setArtisans(data);
      })
      .catch((err) => {
        console.error('❌ Erreur lors du chargement des artisans :', err);
        setArtisans([]);
      });
  }, []);

  return (
    <div className="artisan-of-the-month">
      <h2>Artisans du mois</h2>
      <div className="artisan-grid">
        {Array.isArray(artisans) && artisans.length > 0 ? (
          artisans.map((artisan, index) => (
            <div className="artisan-card" key={index}>
              <img src={artisanExemple} alt={artisan.nom} className="artisan-img" />
              <h4 className="artisan-name">{artisan.nom}</h4>
              <p>
                <strong>Note :</strong>{" "}
                {'⭐️'.repeat(Math.round(artisan.note))} ({artisan.note}/5)
              </p>
              <p><strong>Spécialité :</strong> {artisan.specialite?.nom}</p>
              <p><strong>Localisation :</strong> {artisan.ville}</p>
            </div>
          ))
        ) : (
          <p>Aucun artisan disponible pour le moment.</p>
        )}
      </div>
    </div>
  );
};

export default ArtisansDuMois;
