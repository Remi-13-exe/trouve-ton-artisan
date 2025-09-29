// Importation d'Express pour créer un router
const express = require('express');
// Importation de l'opérateur Sequelize pour les conditions comme LIKE
const { Op } = require('sequelize');
// Importation des modèles Artisan et Specialite
const { Artisan, Specialite } = require('../models');

// Création du router Express
const router = express.Router();

// ✅ GET artisans du mois (top = 1)
// Route pour récupérer les artisans mis en avant ce mois-ci
router.get('/du-mois', async (req, res) => {
  try {
    // Recherche des artisans avec top = 1
    const artisansDuMois = await Artisan.findAll({
      where: { top: 1 },            // Filtre par top = 1
      limit: 3,                      // Limite à 3 résultats
      attributes: ['nom', 'note', 'ville', 'description'], // Champs renvoyés
      include: [
        {
          model: Specialite,         // Inclut le modèle Specialite
          as: 'specialite',          // Alias défini dans le modèle
          attributes: ['nom'],       // Ne récupère que le nom de la spécialité
        },
      ],
    });

    // Renvoie les résultats en JSON
    res.json(artisansDuMois);
  } catch (error) {
    console.error('Erreur lors de la récupération des artisans du mois :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ✅ GET tous les artisans avec filtres (specialité + recherche par nom)
router.get('/', async (req, res) => {
  try {
    const { specialiteId, search } = req.query; // Récupération des filtres depuis les query params

    // Construction dynamique de la clause WHERE
    const whereClause = {};
    if (search) {
      whereClause.nom = { [Op.like]: `%${search}%` }; // Filtre par nom contenant la chaîne
    }
    if (specialiteId) {
      whereClause.specialiteId = specialiteId;       // Filtre par ID de spécialité
    }

    // Recherche des artisans avec les filtres appliqués
    const artisans = await Artisan.findAll({
      where: whereClause,
      include: [
        {
          model: Specialite,
          as: 'specialite',
          attributes: ['nom'], // Ne récupère que le nom de la spécialité
        },
      ],
    });

    res.json(artisans);
  } catch (error) {
    console.error('Erreur lors de la récupération des artisans :', error);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération des artisans' });
  }
});

// ✅ GET un artisan par son ID
router.get('/:id', async (req, res) => {
  try {
    // Recherche d'un artisan par sa clé primaire (ID)
    const artisan = await Artisan.findByPk(req.params.id, {
      include: [
        {
          model: Specialite,
          as: 'specialite',
          attributes: ['nom'], // Inclut uniquement le nom de la spécialité
        },
      ],
    });

    // Si l'artisan n'existe pas, renvoie une erreur 404
    if (!artisan) {
      return res.status(404).json({ error: 'Artisan non trouvé' });
    }

    // Sinon, renvoie l'artisan trouvé
    res.json(artisan);
  } catch (error) {
    console.error('Erreur lors de la récupération d’un artisan :', error);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération de l’artisan' });
  }
});

// Exportation du router pour l'utiliser dans app.js ou server.js
module.exports = router;
