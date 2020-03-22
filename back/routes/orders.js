const express = require("express");
const router = express.Router();
const Order = require("../models/order")
const User = require("../models/user")
const ProductData = require("../models/productData")


router.post("/addOrder",function(req,res){
    User.findByPk(req.user.id)
        .then((user)=>{
            ProductData.findByPk(req.body.productDataId)
            .then((productData)=>{
                Order.findOrCreate({
                    where:{
                            userId:req.user.id,
                            status:req.body.status,
                            address:req.body.address
                    }
                }).spread(function(order,created){
                    productData.setOrder(order)
                    productData.setUser(user)
                    res.json(order)
                })




                
            })
        })
    })
                
    
                   
                
                    


module.exports= router