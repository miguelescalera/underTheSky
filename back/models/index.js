const db = require("../db/index")

const Product = require('./product')
const User = require('./user')
const Order = require('./order')
const Frame = require("./frame")
const Style = require('./style')
const Size = require('./size')

Product.belongsTo(User);
Product.belongsTo(Frame);
Product.belongsTo(Style);
Product.belongsTo(Size);

Product.belongsToMany(Order)
Order.belongsTo(User)


module.exports = {
    db,
    User,
    Product,
    Frame,
    Style,
    Size

}






