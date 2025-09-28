// Importation d'Express pour créer un router
const express = require('express');
// Création du router Express
const router = express.Router();
// Importation du modèle Specialite depuis les modèles Sequelize
const { Specialite } = require('../models');

// Route GET pour récupérer toutes les spécialités
router.get('/', async (req, res) => {
  try {
    // Récupération de toutes les spécialités depuis la base de données
    const specialites = await Specialite.findAll();
    // Envoi des spécialités récupérées en réponse JSON
    res.json(specialites);
  } catch (error) {
    // Gestion des erreurs : log côté serveur et renvoi d'une réponse 500
    console.error(error);
    res.status(500).send('Erreur lors de la récupération des spécialités');
  }
});

// Exportation du router pour l'utiliser dans app.js ou server.js
module.exports = router;
