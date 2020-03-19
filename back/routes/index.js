/*app.js pega aca a las rutas, de aca se redirigen a sus correspondientes archivos */

const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const productsRouter = require("./products")
const ordersRouter = require("./orders")
const adminRouter = require("./admin")


router.use("/users",usersRouter)
router.use("/products",productsRouter)
router.use("/orders",ordersRouter)
router.use("/admin",adminRouter)








module.exports = router;





