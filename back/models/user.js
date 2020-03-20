const Sequelize = require('sequelize')
const sequelize = require('../db/index.js');
const crypto = require("crypto")

class User extends Sequelize.Model { }

User.init({
    type: {
        type: Sequelize.ENUM('admin', 'normal'),
        defaultValue: 'normal'
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
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
    salt: {
             type: Sequelize.STRING, 
                }

}, {
        sequelize,
        modelName: 'user'
    });

    User.addHook('beforeCreate', (user) => {
        user.salt = crypto.randomBytes(20).toString('hex');
        user.password = user.hashPassword(user.password);
        
      })
      
    User.prototype.hashPassword = function (password) {
        return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
    }
        
      
    User.prototype.validPassword = function (password) {
        return this.password === this.hashPassword(password); 



    }
       

module.exports = User;