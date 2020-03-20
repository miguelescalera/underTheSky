const express = require("express");
const router = express.Router();
const Order = require("../models/order")
const User = require("../models/user")
const ProductData = require("../models/productData")


router.post("/addOrder",function(req,res){
    console.log("bBODY::",req.body)
    User.findByPk(req.user.id)
        .then((user)=>{
            ProductData.findByPk(req.body.productDataId)
            .then((productData)=>{
                Order.create(req.body).then((order)=>{
                    productData.setOrder(order)
                    productData.setUser(user)
                   
                })
            })
        })
    })
                
                    


module.exports= router