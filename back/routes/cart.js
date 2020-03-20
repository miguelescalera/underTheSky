const express = require("express");
const router = express.Router();
const ProductData = require("../models/productData")
const Order = require("../models/order")
const Product = require("../models/product")

/*esta ruta trae todos los products data con sus ordenes y productos pero no estan ordenados, buscar la forma de que los traiga ordenados*/
router.get("/",function(req,res){
    let data=[]
    let object={}
    ProductData.findAll({
        where:{
            userId:req.user.id
        }
    }).then((productsData)=>{
        console.log("PRODUCTOS!!",productsData)
        productsData.forEach((e)=>{
            Order.findAll({where:{id:e.orderId}})
            .then((orders)=>{
                object.productData=e
                object.order= orders
                data.push(object)
            })
        })
    }).then(()=>{
        res.send(data)
    })
})
                
                
            
           
            



router.delete("/delete",function(req,res){
    ProductData.findByPk(req.body.id)
    .then((productData)=>{
        productData.destroy()
    }).then(()=>{
        res.sendStatus(204)
    })

})
module.exports= router