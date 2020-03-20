const db = require("../db/index")

const Product = require('./product')
const User = require('./user')
const Order = require('./order')
const Frame = require("./frame")
const Style = require('./style')
const Size = require('./size')
const Display = require('./display')


Product.belongsTo(User);
Product.belongsTo(Frame);
Product.belongsTo(Style);
Product.belongsTo(Size);
Product.belongsTo(Order);

//Product.belongsToMany(Order)
Order.belongsTo(User);

Display.belongsTo(Style);

module.exports = {
    db,
    User,
    Product,
    Frame,
    Style,
    Size,
    Order,
    Display

}






