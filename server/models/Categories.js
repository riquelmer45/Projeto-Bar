const { DataTypes } = require("sequelize");
const db = require("../db/DB");

const Categories = db.define("Categories", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Categories;
