// Exportation de la fonction qui définit le modèle Artisan
module.exports = (sequelize, DataTypes) => {
  // Définition du modèle Artisan avec ses champs
  const Artisan = sequelize.define('Artisan', {
    nom: {
      type: DataTypes.STRING,   // Type chaîne de caractères
      allowNull: false,         // Ce champ est obligatoire
    },
    metier: {
      type: DataTypes.STRING,   // Métier de l'artisan (optionnel)
    },
    ville: {
      type: DataTypes.STRING,   // Ville de l'artisan (optionnel)
    },
    description: {
      type: DataTypes.TEXT,     // Description de l'artisan (texte long)
    },
    site_web: {
      type: DataTypes.STRING,   // URL du site web (optionnel)
    },
    specialiteId: {
      type: DataTypes.INTEGER,  // Clé étrangère vers la spécialité
      field: 'specialite_id',   // Nom réel de la colonne dans la base de données
    },
    email: {
      type: DataTypes.STRING,   // Email de l'artisan (optionnel)
    },
    top: {
      type: DataTypes.INTEGER,  // Champ pour classer ou marquer les artisans (optionnel)
    },
  }, {
    tableName: 'artisan',       // Nom de la table dans la base de données
    timestamps: false,          // Pas de colonnes createdAt / updatedAt automatiques
  });

  // Définition des associations avec d'autres modèles
  Artisan.associate = (models) => {
    // Un artisan appartient à une spécialité
    Artisan.belongsTo(models.Specialite, {
      foreignKey: 'specialiteId', // Clé étrangère
      as: 'specialite'            // Alias utilisé pour les jointures et requêtes
    });
  };

  // Retourne le modèle Artisan
  return Artisan;
};
