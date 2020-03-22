const express = require("express");
const router = express.Router();
const ProductData = require("../models/productData")
const Order = require("../models/order")
const Product = require("../models/product")


router.get("/",function(req,res){
    ProductData.findAll({
        where:{
            userId:req.user.id
        }
    }).then((productsData)=>{
        res.send(productsData)
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