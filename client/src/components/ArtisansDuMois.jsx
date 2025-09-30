import { useEffect, useState } from "react";
import artisanExemple from "../assets/artisan-exemple.jpg";
import './Artisan-of-the-month.scss';

const ArtisansDuMois = () => {
  // 🔹 État pour stocker les artisans du mois
  const [artisans, setArtisans] = useState([]);

  // 🔹 Charger les artisans du mois dès le montage du composant
  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL; // URL du backend depuis .env
    fetch(`${API_URL}/api/artisans/du-mois`, {
      headers: {
        'x-api-key': 'trouve-ton-artisan-2025-secret-cle' // clé API côté backend
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setArtisans(data); // mise à jour de l’état avec les données reçues
      })
      .catch((err) => {
        console.error("Erreur chargement artisans du mois :", err);
        // Optionnel : afficher un message à l'utilisateur
      });
  }, []); // [] → ne s'exécute qu'une seule fois

  return (
    <div className="artisan-of-the-month">
      <h2>Artisans du mois</h2>
      <div className="artisan-grid">
        {artisans.length > 0 ? (
          artisans.map((artisan, index) => (
            <div className="artisan-card" key={index}>
              {/* Image de l'artisan ou image par défaut */}
              <img
                src={artisan.photo || artisanExemple}
                alt={artisan.nom}
                className="artisan-img"
              />
              <h4 className="artisan-name">{artisan.nom}</h4>
              <p>
                <strong>Note :</strong>{" "}
                {'⭐️'.repeat(Math.round(artisan.note || 0))} ({artisan.note || 0}/5)
              </p>
              <p><strong>Spécialité :</strong> {artisan.specialite?.nom || "N/A"}</p>
              <p><strong>Localisation :</strong> {artisan.ville || "N/A"}</p>
            </div>
          ))
        ) : (
          <p>Aucun artisan du mois pour le moment.</p>
        )}
      </div>
    </div>
  );
};

export default ArtisansDuMois;
