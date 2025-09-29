const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,       // Nom de ta base (trouve_artisan_db)
  process.env.DB_USER,       // Ton user Render
  process.env.DB_PASSWORD,   // Ton mot de passe Render
  {
    host: process.env.DB_HOST,   // Host Render
    dialect: 'postgres',         // 👉 changer MySQL → Postgres
    port: process.env.DB_PORT || 5432, // Port PostgreSQL
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false } // Render impose SSL
    },
    logging: false
  }
);

sequelize.authenticate()
  .then(() => console.log('✅ Connexion DB OK'))
  .catch(err => console.error('❌ Erreur connexion DB', err));

module.exports = sequelize;
