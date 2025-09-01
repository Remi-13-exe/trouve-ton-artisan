const express = require('express');
const router = express.Router();
const { Specialite } = require('../models');

router.get('/', async (req, res) => {
  try {
    const specialites = await Specialite.findAll();
    res.json(specialites);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de la récupération des spécialités');
  }
});

module.exports = router;
