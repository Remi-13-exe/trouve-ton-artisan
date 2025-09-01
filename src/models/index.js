const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Category = require('./Category')(sequelize, DataTypes);
const Specialite = require('./Specialite')(sequelize, DataTypes);
const Artisan = require('./Artisan')(sequelize, DataTypes);

// 💡 Appel des associations ici
if (Category.associate) Category.associate({ Artisan, Specialite });
if (Specialite.associate) Specialite.associate({ Artisan, Category });
if (Artisan.associate) Artisan.associate({ Specialite, Category });

module.exports = {
  sequelize,
  Category,
  Specialite,
  Artisan,
};
