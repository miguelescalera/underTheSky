const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const ProductData = require("../models/productData");
const User = require("../models/user")
const Size =require("../models/size")
const Frame =require("../models/frame")
const Style =require("../models/style")



router.post('/nuevoproducto', function (req, res) {
  console.log('llegue a la ruta y esto es', req.body)
  ProductData.create(req.body)
    .then(productData => res.send(productData))
})


router.get('/productData/:id', function (req, res) {
  ProductData.findByPk(req.params.id)
    .then(data => res.send('entro'))
})


router.post("/newProductData", function (req, res) {
  ProductData.create(req.body)
    .then(productData => {

      User.findByPk(req.user.id)
        .then((user) => {

          Product.findByPk(req.body.productId)
            .then((product) => {

              productData.setProduct(product)
              productData.setUser(user)
              res.json(productData);

            })
        })
    });
});

router.post("/newProduct", function (req, res) {
  Product.findOrCreate({
    where: {
      digital: req.body.digital,
      frameId: req.body.frameId,
      sizeId: req.body.sizeId,
      styleId: req.body.styleId
    }
  }).spread(function (product, created) {
    res.json(product);
  });
});


router.get("/getProducts", function (req, res) {
  Product.findAll()
    .then(function (products) {
      res.json(products)
    })
})


router.get("/:id", function (req, res) {
  Product.findByPk(req.params.id).then(function (product) {
    res.json(product);
  });
});

router.post("/getAllfss",function(req,res){
  console.log("entre")
 Frame.findAll().then(frames=>{
   console.log("fffffffffffff",frames)
   Style.findAll().then(styles=>{
     Size.findAll().then(sizes=>{
       res.send({
         frames:frames,
         styles:styles,
         sizes:sizes
       })
     })
   })
 })
})





module.exports = router;
