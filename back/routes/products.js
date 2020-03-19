const express = require("express");
const router = express.Router();
const Product = require("../models/product")


router.post("/newProduct",function(req,res){

    Product.create(req.body)
    .then(function(){
        res.sendStatus(200)
    })
})


router.get("/getProducts",function(req,res){
    Product.findAll()
    .then(function(products){
        res.json(products)
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



router.delete("/:id",function(req,res){
    Product.findByPk(req.params.id)
    .then(function(product){
        product.destroy()
    })
    .then(function(){
        res.sendStatus(200)
    })
})



module.exports= router
