const express = require("express");
const router = express.Router();
const Order = require("../models/order")

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

router.post("/addOrder",function(req,res){
    Order.create(req.body)
    .then(function(){
        res.sendStatus(200)
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
module.exports= router