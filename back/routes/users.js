const express = require("express");
const router = express.Router();
const Users = require("../models/users")
const passport = require("passport")

router.get("/getUsers",function(req,res){
    Users.findAll()
    .then(function(users){
        res.json(users)
    })
})


router.get("/:id",function(req,res){
    Users.findByPk(req.params.id)
    .then(function(user){
        res.json(user)
    })
})


router.post("/register",function(req,res){
    Users.create(req.body).then(function(){
        res.sendStatus(201)
    })
})



router.post("/login",passport.authenticate('local'),function(req,res){
    res.send(req.user)
})

router.post('/logout', function(req, res){
   
    if (req.isAuthenticated()) {
        // console.log("Logouteo")
          req.logout();
          req.session.destroy();
    }
    res.send("Logout")
    });



router.put("/:id",function(req,res){
    Users.findByPk(req.params.id)
    .then(function(user){
        user.update(req.body)
    })
    .then(function(){
        res.sendStatus(204)
    })
})



router.delete("/:id",function(req,res){
    Users.findByPk(req.params.id)
    .then(function(user){
        user.destroy()
    })
    .then(function(){
        res.sendStatus(200)
    })
})
module.exports= router