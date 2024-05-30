const { Sequelize } = require("sequelize");

require("dotenv").config({ path: "../config.env" });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      timestamps: false, // globally disable timestamps
    },
  }
);

module.exports = sequelize;
