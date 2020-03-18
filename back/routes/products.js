const express = require("express");
const router = express.Router();
const Products = require("../models/products")


router.get("/getProducts",function(req,res){
    Products.findAll()
    .then(function(products){
        res.json(products)
    })
})


router.get("/:id",function(req,res){
    Products.findByPk(req.params.id)
    .then(function(product){
        res.json(product)
    })
})




router.put("/:id",function(req,res){
    Products.findByPk(req.params.id)
    .then(function(product){
        product.update(req.body)
    })
    .then(function(){
        res.sendStatus(204)
    })
})



router.delete("/:id",function(req,res){
    Products.findByPk(req.params.id)
    .then(function(product){
        product.destroy()
    })
    .then(function(){
        res.sendStatus(200)
    })
})



module.exports= router
