const Sequelize = require('sequelize')
const sequelize = require('../db/index.js');

class User extends Sequelize.Model { }

User.init({
    type: {
        type: Sequelize.ENUM('superAdmin', 'admin', 'normal'),
        defaultValue: 'normal'
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

}, {
        sequelize,
        modelName: 'user'
    });

module.exports = User;