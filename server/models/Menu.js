const { DataTypes } = require("sequelize");
const db = require("../db/DB");

const Menu = db.define(
  "Menu",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(10000), // specify the length as 10000
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT, // specify the type as TEXT
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255), // specify the length as 255
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories", // name of the table, not the model
        key: "id",
      },
    },
  },
  {
    tableName: "menu",
  }
);

module.exports = Menu;
