const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const apiKeyMiddleware = require('./src/middlewares/apiKeyMiddleware');
const errorHandler = require('./src/middlewares/errorHandler');

const artisansRoute = require('./src/routes/artisanRoutes');
// Ajoute ici les autres routes si besoin

const { sequelize } = require('./src/models');

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'X-API-KEY']
}));

app.use(apiKeyMiddleware);

app.use('/api/artisans', artisansRoute);
// Ajoute ici les autres routes si besoin

app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('API opérationnelle 🚀');
});

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
