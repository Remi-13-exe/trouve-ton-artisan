const express = require('express');
const { Op } = require('sequelize');
const { Artisan, Specialite } = require('../models');

const router = express.Router();

// ✅ GET artisans du mois (top = 1)
router.get('/du-mois', async (req, res) => {
  try {
    const artisansDuMois = await Artisan.findAll({
      where: { top: 1 },
      limit: 3,
      include: [
        {
          model: Specialite,
          as: 'specialite',
          attributes: ['nom'],
        },
      ],
    });

    res.json(artisansDuMois);
  } catch (error) {
    console.error('Erreur lors de la récupération des artisans du mois :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ✅ GET tous les artisans avec filtres (specialité + recherche par nom)
router.get('/', async (req, res) => {
  try {
    const { specialiteId, search } = req.query;

    // Construction dynamique de la clause WHERE
    const whereClause = {};
    if (search) {
      whereClause.nom = { [Op.like]: `%${search}%` };
    }
    if (specialiteId) {
      whereClause.specialiteId = specialiteId;
    }

    const artisans = await Artisan.findAll({
      where: whereClause,
      include: [
        {
          model: Specialite,
          as: 'specialite',
          attributes: ['nom'],
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
    const artisan = await Artisan.findByPk(req.params.id, {
      include: [
        {
          model: Specialite,
          as: 'specialite',
          attributes: ['nom'],
        },
      ],
    });

    if (!artisan) {
      return res.status(404).json({ error: 'Artisan non trouvé' });
    }

    res.json(artisan);
  } catch (error) {
    console.error('Erreur lors de la récupération d’un artisan :', error);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération de l’artisan' });
  }
});

module.exports = router;
