const Sequelize = require('sequelize')
const sequelize = require('../db/index.js');

class Product extends Sequelize.Model { }
Product.init({
    emailClient: {
        type: Sequelize.STRING,
        allowNull: true
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    place: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: true
    },
    language: {
        type: Sequelize.STRING,
        allowNull: true
    },
    img: {
        type: Sequelize.STRING,
        allowNull: true
    },


}, { sequelize, modelName: 'product' });

module.exports = Product;