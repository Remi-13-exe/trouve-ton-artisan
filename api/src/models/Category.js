// models/category.js

// Exportation de la fonction qui définit le modèle Category
module.exports = (sequelize, DataTypes) => {
  // Définition du modèle Category avec ses champs
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,   // Type entier
      primaryKey: true,          // Clé primaire
      autoIncrement: true,       // Auto-incrémentation
    },
    nom: {
      type: DataTypes.STRING,    // Nom de la catégorie
      allowNull: false,          // Champ obligatoire
    },
  }, {
    tableName: 'categorie',       // Nom réel de la table dans MySQL
    timestamps: false,            // Désactive les colonnes createdAt et updatedAt
  });

  // Retourne le modèle Category
  return Category;
};
