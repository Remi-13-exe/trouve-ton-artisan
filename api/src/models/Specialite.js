module.exports = (sequelize, DataTypes) => {
  const Specialite = sequelize.define('Specialite', {
    nom: {
      type: DataTypes.STRING,
    },
    categorieId: {
      type: DataTypes.INTEGER,
      field: 'categorie_id', // ← c’est ça qui règle le problème
    },
  }, {
    tableName: 'specialite',
    timestamps: false,
  });


  Specialite.associate = (models) => {
  Specialite.hasMany(models.Artisan, {
    foreignKey: 'specialiteId',
    as: 'artisans'
  });
};


  return Specialite;
};
