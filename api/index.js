// ===============================
// index.js - Serveur Node / Express
// ===============================

// Importation des modules nécessaires
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config(); // Chargement des variables d'environnement depuis .env

// Importation des middlewares
const apiKeyMiddleware = require('./src/middlewares/apiKeyMiddleware');
const errorHandler = require('./src/middlewares/errorHandler');

// Importation des routes
const artisansRoute = require('./src/routes/artisanRoutes');
// Ajouter ici d'autres routes si nécessaire

// Importation de l'instance Sequelize
const { sequelize } = require('./src/models');

// Création de l'application Express
const app = express();

// Middleware pour parser le JSON dans le corps des requêtes
app.use(express.json());

// Middleware CORS pour autoriser le front-end à accéder à l'API
app.use(cors({
  origin: [
    'http://localhost:3000', // Front local pour dev
    'https://trouve-ton-artisan-front.onrender.com' // Remplace par l’URL de ton front Render
  ],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'X-API-KEY']
}));

// Middleware pour vérifier la clé API
app.use(apiKeyMiddleware);

// Définition des routes
app.use('/api/artisans', artisansRoute);
// Ajouter ici les autres routes si nécessaire

// Middleware global de gestion des erreurs
app.use(errorHandler);

// Route de test pour vérifier que l'API est opérationnelle
app.get('/', (req, res) => {
  res.send('API opérationnelle 🚀');
});

// Route POST pour recevoir les messages de contact
app.post('/contact', (req, res) => {
  // Ici, tu peux ajouter la logique pour envoyer l'email
  res.json({ message: 'Message reçu !' });
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000; // Render fournit le port via la variable d'environnement
app.listen(PORT, async () => {
  console.log(`Serveur démarré sur le port ${PORT}...`);
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie ✅');
  } catch (error) {
    console.error('Erreur connexion DB ❌', error);
  }
});
