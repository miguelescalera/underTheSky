const Sequelize = require('sequelize');
const sequelize = require('../db/index.js');

class Size extends Sequelize.Model { }
Size.init({
    width: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    height: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }



}, { sequelize, modelName: 'size' });

module.exports = Size;