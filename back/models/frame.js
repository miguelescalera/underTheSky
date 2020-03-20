const Sequelize = require('sequelize');
const sequelize = require('../db/index.js');

class Frame extends Sequelize.Model { }
Frame.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
    }



}, { sequelize, modelName: 'frame' });

module.exports = Frame;


