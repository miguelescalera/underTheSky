/*LA BASE DE DATOS SOLO VA A LEVANTAR EN WINDOWS,HACERLE LOS CAMBIOS NECESARIOS PARA QUE FUNCIONE EN TU S.O*/

const Sequelize = require("sequelize");

const db = new Sequelize(
  "postgres://localhost:5432/under_the_sky",
  {
    logging: false,
    dialect: "postgres"
  }
);

module.exports = db;