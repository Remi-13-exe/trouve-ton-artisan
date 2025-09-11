const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const artisansRoute = require('../api/src/routes/artisanRoutes');
const categoriesRoute = require('../api/src/routes/categoriesRoute');
const specialitesRoute = require('../api/src/routes/specialiteRoutes');
const contactRoutes = require('../api/src/routes/contactRoutes');
const apiKeyMiddleware = require('../api/src/middlewares/apiKeyMiddleware');
const errorHandler = require('../api/src/middlewares/errorHandler');
const cors = require('cors');

// ✅ Import des modèles et de Sequelize
const { sequelize, Category, Specialite, Artisan } = require('../api/src/models');
console.log('Category model chargé ✅', Category);

const app = express();
app.use(express.json());

// ✅ Routes
app.use(apiKeyMiddleware); // 🔐 active la protection sur toutes les routes
app.use('/', contactRoutes);
app.use('/artisans', artisansRoute);
app.use('/categories', categoriesRoute);
app.use('/specialites', specialitesRoute);
app.use(errorHandler);
app.use(cors({
  origin: ['http://localhost:3000'], // à modifier plus tard
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'X-API-KEY']
}));




// ✅ Route racine
app.get('/', (req, res) => {
  res.send('API opérationnelle 🚀');
});



// ✅ Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`API démarrée sur http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie ✅');
  } catch (error) {
    console.error('Erreur de connexion à la base de données ❌', error);
  }
});

console.log("API_KEY chargée :", process.env.API_KEY);

