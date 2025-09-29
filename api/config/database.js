const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    dialectOptions: {
      connectTimeout: 10000
    },
    logging: false
  }
);

sequelize.authenticate()
  .then(() => console.log('✅ Connexion DB OK'))
  .catch(err => console.error('❌ Erreur connexion DB', err));

module.exports = sequelize;
