const Sequelize = require("sequelize");
const sequelize = require("../db/index.js");

class Size extends Sequelize.Model {}
Size.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  { sequelize, modelName: "size" }
);

module.exports = Size;
