// Importation de la classe Sequelize depuis le package 'sequelize'
const { Sequelize } = require('sequelize');

// Chargement des variables d'environnement depuis le fichier .env
require('dotenv').config();

// Création d'une instance de Sequelize pour se connecter à la base de données
const sequelize = new Sequelize(
  process.env.DB_NAME,       // Nom de la base de données (défini dans .env)
  process.env.DB_USER,       // Nom d'utilisateur pour la base de données
  process.env.DB_PASSWORD,   // Mot de passe pour la base de données
  {
    host: process.env.DB_HOST, // Adresse du serveur de base de données
    dialect: 'mysql',          // Type de base de données utilisé (ici MySQL)
    port: process.env.DB_PORT || 3306, // Port de la base de données (par défaut 3306 si non défini)
  }
);

// Exportation de l'instance Sequelize pour l'utiliser dans d'autres fichiers du projet
module.exports = sequelize;
