const express = require("express");
const router = express.Router();
const User = require("../models/user")
const passport = require("passport")

router.get("/getUsers",function(req,res){
    User.findAll()
    .then(function(users){
        res.json(users)
    })
})


router.get("/:id",function(req,res){
    User.findByPk(req.params.id)
    .then(function(user){
        res.json(user)
    })
})


router.post("/register",function(req,res){
   
    User.create(req.body).then(function(){
        res.sendStatus(201)
    })
})


router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        return next(err); // will generate a 500 error
      }
      // Generate a JSON response reflecting authentication status
      if (! user) {
        return res.send({ success : false, message : 'authentication failed' });
      }
      
      req.login(user, loginErr => {
        if (loginErr) {
          return next(loginErr);
        }
       
        return res.send(req.user);
      });      
    })(req, res, next);
  });

  /*
  router.post("/login",passport.authenticate('local'),function(req,res){
      res.send(req.user)
  })
  */

router.post('/logout', function(req, res){
   
    if (req.isAuthenticated()) {
        // console.log("Logouteo")
          req.logout();
          req.session.destroy();
    }
    res.send("Logout")
    });



router.put("/:id",function(req,res){
    User.findByPk(req.params.id)
    .then(function(user){
        user.update(req.body)
    })
    .then(function(){
        res.sendStatus(204)
    })
})



router.delete("/:id",function(req,res){
    User.findByPk(req.params.id)
    .then(function(user){
        user.destroy()
    })
    .then(function(){
        res.sendStatus(200)
    })
})
module.exports= router