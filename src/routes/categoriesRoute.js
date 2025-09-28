// Importation d'Express pour créer un router
const express = require('express');
// Création du router Express
const router = express.Router();
// Importation du modèle Category depuis les modèles Sequelize
const { Category } = require('../models'); // Chemin correct selon ton projet

// Route GET pour récupérer toutes les catégories
router.get('/', async (req, res) => {
  try {
    // Récupération de toutes les catégories depuis la base de données
    const categories = await Category.findAll();
    // Envoi des catégories récupérées en réponse JSON
    res.json(categories);
  } catch (error) {
    // Gestion des erreurs : log côté serveur et renvoi d'une réponse 500
    console.error('Erreur lors de la récupération des catégories ❌', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Exportation du router pour l'utiliser dans app.js ou server.js
module.exports = router;
