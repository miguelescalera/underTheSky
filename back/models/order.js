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
        },
        city:{
            type:Sequelize.STRING,
            allowNull: false
        },
        country:{
            type:Sequelize.STRING,
            allowNull: false
        },
        state:{
            type:Sequelize.STRING,
            allowNull: false
        },
        postCode:{
            type:Sequelize.STRING,
            allowNull: false
        },
        transactionNumber:{
            type:Sequelize.INTEGER,
            defaultValue:0
        }
            

    }, { sequelize, modelName: 'order' });

module.exports = Order;