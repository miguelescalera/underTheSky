const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const ProductData = require("../models/productData");
const User = require("../models/user")

router.post("/newProductData", function(req, res) {
  ProductData.create(req.body)
  .then(productData => {

    User.findByPk(req.user.id)
    .then((user)=>{

      Product.findByPk(req.body.productId)
      .then((product)=>{

        productData.setProduct(product)
        productData.setUser(user)
        res.json(productData);

      })
    })
  });
});

router.post("/newProduct", function(req, res) {
  Product.findOrCreate({
    where: {
      digital: req.body.digital,
      frameId: req.body.frameId,
      sizeId: req.body.sizeId,
      styleId: req.body.styleId
    }
  }).spread(function(product, created) {
    res.json(product);
  });
});


router.get("/getProducts",function(req,res){
  Product.findAll()
  .then(function(products){
      res.json(products)
  })
})


router.get("/:id", function(req, res) {
  Product.findByPk(req.params.id).then(function(product) {
    res.json(product);
  });
});





module.exports = router;
