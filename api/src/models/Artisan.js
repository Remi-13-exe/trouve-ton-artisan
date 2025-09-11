module.exports = (sequelize, DataTypes) => {
  const Artisan = sequelize.define('Artisan', {
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    metier: {
      type: DataTypes.STRING,
    },
    ville: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    site_web: {
      type: DataTypes.STRING,
    },
    specialiteId: {
      type: DataTypes.INTEGER,
      field: 'specialite_id', // ← correspond à ta base
    },
    email: {
      type: DataTypes.STRING,
    },
    top: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'artisan',
    timestamps: false,
  });

  Artisan.associate = (models) => {
    Artisan.belongsTo(models.Specialite, {
      foreignKey: 'specialiteId',
      as: 'specialite'
    });
  };

  return Artisan;
};
