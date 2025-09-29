// Exportation de la fonction qui définit le modèle Specialite
module.exports = (sequelize, DataTypes) => {
  // Définition du modèle Specialite avec ses champs
  const Specialite = sequelize.define('Specialite', {
    nom: {
      type: DataTypes.STRING,   // Nom de la spécialité (chaîne de caractères)
    },
    categorieId: {
      type: DataTypes.INTEGER,  // Clé étrangère vers la catégorie
      field: 'categorie_id',    // Nom réel de la colonne dans la base de données
    },
  }, {
    tableName: 'specialite',    // Nom réel de la table dans MySQL
    timestamps: false,          // Désactive les colonnes createdAt et updatedAt
  });

  // Définition des associations
  Specialite.associate = (models) => {
    // Une spécialité peut avoir plusieurs artisans
    Specialite.hasMany(models.Artisan, {
      foreignKey: 'specialiteId', // Clé étrangère dans le modèle Artisan
      as: 'artisans'              // Alias pour les jointures et requêtes
    });
  };

  // Retourne le modèle Specialite
  return Specialite;
};

