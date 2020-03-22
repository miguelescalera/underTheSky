const db = require("../db/index");

const Product = require("./product");
const User = require("./user");
const Order = require("./order");
const Frame = require("./frame");
const Style = require("./style");
const Size = require("./size");
const ProductData = require("./productData");
const Display = require("./display");

ProductData.belongsTo(Product);
ProductData.belongsTo(Order);
ProductData.belongsTo(User);
ProductData.belongsTo(Product)

Product.belongsTo(Frame);
Product.belongsTo(Style);
Product.belongsTo(Size);

Order.belongsTo(User);

Display.belongsTo(Style);

module.exports = {
  db,
  User,
  Product,
  Frame,
  Style,
  Size,
  ProductData,
  Display,
  Order
};
