const express = require("express");
const router = express.Router();
const Frame = require("../models/frame")
const Size = require("../models/size")
const Style = require("../models/style")
const Order = require("../models/order")
const User = require("../models/user")
const Product = require("../models/product")




router.get("/getFrame",function(req,res){
    Frame.findAll().then(function(frames){
        res.json(frames)
    })
})

router.post("/newFrame",function(req,res){
    Frame.create(req.body)
    .then(function(){
        res.sendStatus(200)
    })
})

router.delete("/deleteFrame",function(req,res){
    console.log("aca esta el id: ",req.body.id)
    Frame.findByPk(req.body.id)
    .then(function(frame){
        frame.destroy()
    })
    .then(function(){
        res.sendStatus(200)
    })
})
        


router.get("/getSize",function(req,res){
    Size.findAll().then(function(sizes){
        res.json(sizes)
    })
})

router.post("/newSize",function(req,res){
    Size.create(req.body)
    .then(function(){
        res.sendStatus(200)
    })
})

router.delete("/deleteSize",function(req,res){
    Size.findByPk(req.body.id)
    .then(function(size){
        size.destroy()
    })
    .then(function(){
        res.sendStatus(200)
    })
})


router.get("/getStyle",function(req,res){
    Style.findAll().then(function(styles){
        res.json(styles)
    })
})


router.post("/newStyle",function(req,res){
    Style.create(req.body)
    .then(function(){
        res.sendStatus(200)
    })
})

router.delete("/deleteStyle",function(req,res){
    Style.findByPk(req.body.id)
    .then(function(style){
        style.destroy()
    })
    .then(function(){
        res.sendStatus(200)
    })
})


//////////////////////ORDERS////////////////////////////////////
router.get("/getOrders",function(req,res){
    Order.findAll()
    .then(function(orders){
        res.json(orders)
    })
})


router.put("/changeStatus",function(req,res){
    console.log("BODY: ",req.body)
    Order.findByPk(req.body.id).then(function(order){
        console.log("ORDER: ",order)
        order.update({status:req.body.status})
    .then(function(){
        res.sendStatus(200)
        })
    })
})

router.delete("/delete",function(){
    Order.findByPk(req.body.id)
    .then(function(order){
        order.destroy()
    })
    .then(function(){
        res.sendStatus(200)
    })
})

/////////////////USERS/////////////////////
router.get("/getUsers",function(req,res){
    User.findAll()
    .then(function(users){
        res.json(users)
    })
})

///////////PRODUCTS////////////////////////
router.get("/getProducts",function(req,res){
    Product.findAll()
    .then(function(products){
        res.json(products)
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