// models/category.js
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'categorie', // correspond au nom réel dans MySQL
    timestamps: false,      // désactive createdAt / updatedAt
  });

  return Category;
};
