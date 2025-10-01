// Importation de Sequelize et des types de données
const { Sequelize, DataTypes } = require('sequelize');

// Importation de la configuration de la base de données
console.log('🔹 Import de la config database');
const sequelize = require('../../config/database');

// Vérification de la connexion à la base de données
sequelize.authenticate()
  .then(() => console.log('✅ Connexion à la base de données réussie'))
  .catch(err => console.error('❌ Impossible de se connecter à la base de données :', err));

// Importation et initialisation des modèles avec Sequelize
console.log('🔹 Initialisation des modèles');
const Category = require('./Category')(sequelize, DataTypes);
console.log('📦 Modèle Category chargé');
const Specialite = require('./Specialite')(sequelize, DataTypes);
console.log('📦 Modèle Specialite chargé');
const Artisan = require('./Artisan')(sequelize, DataTypes);
console.log('📦 Modèle Artisan chargé');

// 💡 Appel des associations entre les modèles
console.log('🔹 Appel des associations entre les modèles');
if (Category.associate) {
  Category.associate({ Artisan, Specialite });
  console.log('🔗 Associations Category appliquées');
}
if (Specialite.associate) {
  Specialite.associate({ Artisan, Category });
  console.log('🔗 Associations Specialite appliquées');
}
if (Artisan.associate) {
  Artisan.associate({ Specialite, Category });
  console.log('🔗 Associations Artisan appliquées');
}

// Test de synchronisation (optionnel pour debug, ne pas mettre en production)
sequelize.sync({ alter: false }) // ou { force: true } si tu veux réinitialiser les tables
  .then(() => console.log('✅ Synchronisation des modèles terminée'))
  .catch(err => console.error('❌ Erreur lors de la synchronisation des modèles :', err));

// Exportation des modèles et de l'instance Sequelize
console.log('🔹 Export des modèles et de Sequelize');
module.exports = {
  sequelize,
  Category,
  Specialite,
  Artisan,
};
