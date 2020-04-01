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
                            address:req.body.address,
                            postCode:req.body.postCode,
                            transactionNumber:req.body.transactionNumber,
                            city:req.body.city,
                            country:req.body.country,
                            state:req.body.state
                    }
                }).spread(function(order,created){
                    console.log("order",order)
                    console.log("productdata",productData)
                    productData.setOrder(order)
                    res.json(order)
                })
                    




                
            })
        })
    })
                
    
                   
                
                    


module.exports= router