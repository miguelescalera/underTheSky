const express = require("express");
const router = express.Router();
const Product = require("../models/product")
const ProductData = require("../models/productData")





router.post("/newProductData",function(req,res){
    ProductData.create(req.body)
    .then((productData)=>{
        res.json(productData)
    })
})


router.post("/newProduct",function(req,res){
    Product.findOrCreate({
        where:{
            digital:req.body.digital,
            frameId: req.body.frameId,
            sizeId: req.body.sizeId,
            styleId: req.body.styleId,
        }
    }).spread(function(product,created){

        res.json(product)
    })

})




router.get("/:id",function(req,res){
    Product.findByPk(req.params.id)
    .then(function(product){
        res.json(product)
    })
})




router.put("/:id",function(req,res){
    Product.findByPk(req.params.id)
    .then(function(product){
        product.update(req.body)
    })
    .then(function(){
        res.sendStatus(204)
    })
})







module.exports= router
