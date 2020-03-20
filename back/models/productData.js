const Sequelize = require('sequelize')
const sequelize = require('../db/index.js');

class ProductData extends Sequelize.Model { }
ProductData.init({
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    language: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emailClient: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    }


}, { sequelize, modelName: 'productData' });

module.exports = ProductData;