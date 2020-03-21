//RUTAS DE DISPLAY
const express = require("express");
const router = express.Router();


router.get("/getDisplay",function(req,res){
    Style.findAll().then(function(styles){
        res.json(displays)
    })
})
router.post("/newDisplay",function(req,res){
    Display.create(req.body)
    .then(function(){
        res.sendStatus(200)
    })
})
router.delete("/deleteDisplay",function(req,res){
    Display.findByPk(req.body.id)
    .then(function(style){
        style.destroy()
    })
    .then(function(){
        res.sendStatus(200)
    })
})

module.exports= router