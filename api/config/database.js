// Importation de Sequelize
const { Sequelize } = require("sequelize");

// Charger les variables d'environnement
require("dotenv").config();

// Connexion avec DATABASE_URL (Render → Internal DB URL)
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",       // ⚠️ Render = PostgreSQL
  dialectOptions: {
    ssl: {
      require: true,         // Oblige SSL (Render l’utilise souvent)
      rejectUnauthorized: false,
    },
  },
});

// Tester la connexion
sequelize.authenticate()
  .then(() => console.log("✅ Connexion PostgreSQL réussie"))
  .catch((err) => console.error("❌ Erreur connexion DB :", err));

module.exports = sequelize;
