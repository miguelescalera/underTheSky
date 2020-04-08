const Sequelize = require('sequelize')
const sequelize = require('../db/index.js');

class ProductData extends Sequelize.Model { }
ProductData.init({
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
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
    },
    quantity:{
        type: Sequelize.INTEGER,
        defaultValue:1
    },
    digital:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    },
    size:{
        type:Sequelize.STRING
    },
    frame:{
        type:Sequelize.STRING
    },
    style:{
        type:Sequelize.STRING
    },
    price:{
        type:Sequelize.INTEGER
    }


}, { sequelize, modelName: 'product_data' });

module.exports = ProductData;