const Sequelize = require('sequelize')
const sequelize = require('../db/index.js');

class Product extends Sequelize.Model { }
Product.init({
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING
    },
    tipo: {
        type: Sequelize.ENUM('digital', 'impreso'),
        allowNull: false
    }


}, { sequelize, modelName: 'product' });

module.exports = Product;