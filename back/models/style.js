const Sequelize = require('sequelize')
const sequelize = require('../db/index.js');

class Style extends Sequelize.Model { }
Style.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
    }
}, { sequelize, modelName: 'style' });

module.exports = Style;