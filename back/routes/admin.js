const express = require("express");
const router = express.Router();
const Frame = require("../models/frame")
const Size = require("../models/size")
const Style = require("../models/style")
const Order = require("../models/order")
const User = require("../models/user")
const Product = require("../models/product")
const Display= require("../models/display")



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
    Frame.findByPk(req.body.frameId)
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
    Size.findByPk(req.body.sizeId)
    .then(function(size){
        size.destroy()
    })
    .then(function(){
        res.sendStatus(200)
    })
})


router.get("/getStyle",function(req,res){
    Style.findAll().then(function(styleId){
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
    Order.findByPk(req.body.orderId).then(function(order){
        order.update({status:req.body.status})
    .then(function(newOrder){
        res.json(newOrder)
        })
    })
})
       
    

router.delete("/deleteOrder",function(){
    Order.findByPk(req.body.orderId)
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

router.delete("/deleteUser",function(req,res){
    User.findByPk(req.body.userId)
    .then((user)=>{
        user.destroy
    })
    .then(res.sendStatus(204))
})
///////////PRODUCTS////////////////////////


router.delete("/deleteProduct",function(req,res){
    Product.findByPk(req.body.productId)
    .then(function(product){
        product.destroy()
    })
    .then(function(){
        res.sendStatus(200)
    })
})

/////////DISPLAY//////////////////////
router.get("/getDisplay",function(req,res){
    Display.findAll().then(function(display){
        res.json(display)
    })
})
router.post("/newDisplay",function(req,res){
    Display.create(req.body)
    .then(function(){
        res.sendStatus(200)
    })
})
router.delete("/deleteDisplay",function(req,res){
    Display.findByPk(req.body.displayId)
    .then(function(style){
        style.destroy()
    })
    .then(function(){
        res.sendStatus(200)
    })
})

module.exports= router