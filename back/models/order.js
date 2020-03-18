const Sequelize = require('sequelize');
const sequelize = require('../db/index.js');


class Order extends Sequelize.Model { }
Order.init(
    {
        status: {
            type: Sequelize.ENUM('cart', 'delivered', 'inprocess', 'printing'),
            defaultValue: 'inprocess'
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        }

    }, { sequelize, modelName: 'order' });

module.exports = Order;