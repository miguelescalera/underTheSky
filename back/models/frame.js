const Sequelize = require('sequelize');
const sequelize = require('../db/index.js');

class Frame extends Sequelize.Model { }
Frame.init({
    frameless: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    width: {
        type: Sequelize.INTEGER,
    },
    height: {
        type: Sequelize.INTEGER,

    },
    color: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }



}, { sequelize, modelName: 'frame' });

module.exports = Frame;