import { useEffect, useState } from "react";
import artisanExemple from "../assets/artisan-exemple.jpg";
import './Artisan-of-the-month.scss';

const ArtisansDuMois = () => {
  // État local pour stocker la liste des artisans du mois
  const [artisans, setArtisans] = useState([]);

  // Chargement automatique des artisans dès le montage du composant
  useEffect(() => {
    fetch('http://localhost:5000/api/artisans/du-mois', {
      headers: {
        'x-api-key': 'trouve-ton-artisan-2025-secret-cle' // clé API pour sécuriser la requête
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setArtisans(data); // mise à jour de l’état avec les données reçues
      })
      .catch(() => {
        // ici tu pourrais gérer une erreur côté UI si besoin (ex: afficher un message d'erreur)
      });
  }, []); // [] → effet exécuté une seule fois au montage

  return (
    <div className="artisan-of-the-month">
      <h2> Artisans du mois</h2>
      <div className="artisan-grid">
        {artisans.map((artisan, index) => (
          <div className="artisan-card" key={index}>
            {/* Image par défaut (artisanExemple) */}
            <img
              src={artisanExemple}
              alt={artisan.nom}
              className="artisan-img"
            />
            <h4 className="artisan-name">{artisan.nom}</h4>
            <p>
              <strong>Note :</strong>{" "}
              {'⭐️'.repeat(Math.round(artisan.note))} ({artisan.note}/5)
            </p>
            <p><strong>Spécialité :</strong> {artisan.specialite?.nom}</p>
            <p><strong>Localisation :</strong> {artisan.ville}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtisansDuMois;
