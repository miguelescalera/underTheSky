const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");




const email = (email, content) => {
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'undertheskydeco024@gmail.com',
      pass: 'Bajoelcielo1-'
    },
  });
  const mailOptions = {
    from: 'undertheskydeco024@gmail.com',
    to: `${email}`,
    subject: 'Creaste un nuevo usuario',
    text: `Felicidades ${content}! Ya tenés una cuenta de UnderTheSky!!`
  };
  console.log("sending email", mailOptions);
  transporter.sendMail(mailOptions, function (error, info) {
    console.log("senMail returned!");
    if (error) {
      console.log("ERROR!!!!!!", error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

router.get("/:id", function (req, res) {
  User.findByPk(req.params.id).then(function (user) {
    res.json(user);
  });
});


router.post("/register", function (req, res) {
  User.create(req.body).then(function (user) {
    res.json(user);
  })
    .then(() => email(req.body.email, req.body.firstName))
});




router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (!user) {
      return res.send({ success: false, message: "authentication failed" });
    }

    req.login(user, loginErr => {
      if (loginErr) {
        console.log("login err: ", loginErr)
        return next(loginErr);
      }

      return res.send(req.user);
    });
  })(req, res, next);
});



router.post("/logout", function (req, res) {
  if (req.isAuthenticated()) {
    req.logout();
    req.session.destroy();
  }
  res.send("Logout");
});


router.put("/modify", function (req, res) {
  User.findByPk(req.user.id)
    .then(function (user) {
      user.update(req.body);
    })
    .then(function (newUser) {
      res.json(newUser);
    });
});

router.delete("/delete", function (req, res) {
  User.findByPk(req.user.id)
    .then(function (user) {
      user.destroy();
    })
    .then(function () {
      res.sendStatus(200);
    });
});
module.exports = router;
