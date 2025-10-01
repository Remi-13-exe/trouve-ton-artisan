// ===============================
// app.js - Serveur principal (Railway + React Ready)
// ===============================

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config(); // Charge les variables depuis .env

// ===============================
// Import middlewares & routes
// ===============================
const apiKeyMiddleware = require('./src/middlewares/apiKeyMiddleware');
const errorHandler = require('./src/middlewares/errorHandler');
const artisansRoute = require('./src/routes/artisanRoutes');
// const categoryRoute = require('./src/routes/categoryRoutes');
// const specialiteRoute = require('./src/routes/specialiteRoutes');

// Sequelize
const { sequelize } = require('./src/models');

const app = express();

// ===============================
// Logger personnalisé pour DEBUG
// ===============================
app.use((req, res, next) => {
  console.log("📥 Nouvelle requête reçue :");
  console.log("➡️ Méthode :", req.method);
  console.log("➡️ URL :", req.url);
  console.log("➡️ Headers :", req.headers);
  console.log("➡️ Body :", req.body);
  next();
});

// ===============================
// Middleware CORS
// ===============================
app.use(cors({
  origin: '*', // En prod, remplace par l'URL exacte du frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'X-API-KEY'],
  preflightContinue: true,
}));
app.options('*', cors());

// ===============================
// Middleware JSON et nettoyage URLs
// ===============================
app.use(express.json());
app.use((req, res, next) => {
  req.url = req.url.replace(/[\r\n\t]+/g, '').trim();
  next();
});

// ===============================
// Middleware API Key pour sécuriser les routes /api
// ===============================
app.use('/api', apiKeyMiddleware);

// ===============================
// Routes principales
// ===============================
app.use('/api/artisans', artisansRoute);
// app.use('/api/categories', categoryRoute);
// app.use('/api/specialites', specialiteRoute);

// ===============================
// Route contact
// ===============================
app.post('/contact', (req, res) => {
  console.log("📩 Nouveau message reçu via /contact :", req.body);
  res.json({ message: 'Message reçu !' });
});

// ===============================
// Servir le frontend React compilé
// ===============================
app.use(express.static(path.join(__dirname, '../client/build')));

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// ===============================
// Middleware global d’erreur
// ===============================
app.use(errorHandler);

// ===============================
// Démarrage du serveur + Connexion DB
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`🚀 Serveur Express lancé sur le port ${PORT}`);
  console.log('🔎 Tentative de connexion à la base Railway...');

  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à la base Railway réussie !');
    console.log(`   🔹 Base de données : ${process.env.DB_NAME}`);
    console.log(`   🔹 Hôte : ${process.env.DB_HOST}`);
    console.log(`   🔹 Port : ${process.env.DB_PORT}`);
  } catch (error) {
    console.error('❌ Erreur critique : impossible de se connecter à Railway DB :', error);
  }
});
