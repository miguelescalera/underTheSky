const express = require("express");
const router = express.Router();
const Order = require("../models/order")
const User = require("../models/user")
const ProductData = require("../models/productData")
const PuntoDeEncuentro = require("../models/puntoDeEncuentro")


router.post("/addOrder",function(req,res){
    console.log("estoy en el back papa",req.body)
    User.findByPk(req.user.id)
        .then((user)=>{
            ProductData.findByPk(req.body.productDataId)
            .then((productData)=>{
                if(req.body.deliveryPoint){
                    Order.create(req.body)
                    .then(order=>{
                            productData.setOrder(order)
                            order.setPuntoDeEncuentro(req.body.PuntoDeEncuentro)
                            res.json(order)
                        
                    })
                }else{
                    console.log("entre al else",req.body)
                    Order.findOrCreate({
                        where:{
                                userId:req.user.id,
                                address:req.body.address,
                                postCode:req.body.postCode,
                                transactionNumber:123456,
                                city:req.body.city,
                                country:req.body.country,
                                state:req.body.state
                        }
                    }).spread(function(order,created){
                        console.log("este es order", order)
                        productData.setOrder(order)
                        res.json(order)
                    })
                }
            })
        })
    })
                   
   router.post("/modifyOrder",function(req,res){
       console.log("BODY:",req.body)
        Order.findByPk(req.body.orderId)
        .then(order=>{
            ProductData.findByPk(req.body.productDataId)
            .then(productData=>{
                User.findByPk(req.body.userId)
                .then(user=>{
                    order.setUser(user)
                    productData.setUser(user)
                })
                productData.setOrder(order)
                res.json({
                    order:order,
                    productData:productData
                })
            })
        })

    })   
    
    router.get("/userOrders",(req,res)=>{
        Order.findAll({
            where:{
                userId:req.user.id
        }}).then(orders=>{
            ProductData.findAll({
                where:{
                    userId:req.user.id
                }
            }).then(productData=>{
                res.send({
                    orders:orders,
                    productData:productData
                })
            })
        })
    })
       


                
           
                


                


   router.get("/getPuntoDeEncuentro", function(req,res){
       console.log("entre al back")
       PuntoDeEncuentro.findAll()
       .then(response => res.json(response))
   })


                
                
    
                   
                
                    


module.exports= router