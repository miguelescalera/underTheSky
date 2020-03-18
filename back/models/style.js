const Sequelize = require('sequelize')
const sequelize = require('../db/index.js');

class Style extends Sequelize.Model { }
Style.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'category' });

module.exports = Style;