// Importation de Sequelize et des types de données
const { Sequelize, DataTypes } = require('sequelize');
// Importation de la configuration de la base de données
const sequelize = require('../../config/database');

// Importation et initialisation des modèles avec Sequelize
const Category = require('./Category')(sequelize, DataTypes);
const Specialite = require('./Specialite')(sequelize, DataTypes);
const Artisan = require('./Artisan')(sequelize, DataTypes);

// 💡 Appel des associations entre les modèles
// Vérifie si chaque modèle a une méthode associate et l'exécute
// Ceci permet de définir les relations entre les tables
if (Category.associate) Category.associate({ Artisan, Specialite });
if (Specialite.associate) Specialite.associate({ Artisan, Category });
if (Artisan.associate) Artisan.associate({ Specialite, Category });

// Exportation des modèles et de l'instance Sequelize
// Pour pouvoir les utiliser dans tout le projet
module.exports = {
  sequelize,   // L'instance Sequelize configurée
  Category,    // Modèle Category
  Specialite,  // Modèle Specialite
  Artisan,     // Modèle Artisan
};
