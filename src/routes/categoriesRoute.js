const express = require('express');
const router = express.Router();
const { Category } = require('../models'); // Chemin correct selon ton projet

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories); // Renvoie les vraies données
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories ❌', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
