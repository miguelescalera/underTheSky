const Sequelize = require('sequelize');
const sequelize = require('../db/index.js');


class Order extends Sequelize.Model { }
Order.init(
    {
        status: {
            type: Sequelize.ENUM('cart', 'inprocess', 'printing', 'delivered'),
            defaultValue: 'cart'
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        total: {
            type: Sequelize.INTEGER,
            allowNull: false
        },



    }, { sequelize, modelName: 'order' });

module.exports = Order;