const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/Auth");

router.post("/", async (req, res) => {
     const { firstName, lastName, email, username, password } = req.body;

     const oldUser = await Users.findAll({
          where: {
               username: username
          }
     });

     if (oldUser.length != 0) {
          return res.status(409).send("User Already Exist. Please Login");
     }

     bcrypt.hash(password, 10).then((hash) => {
          Users.create({
               firstName: firstName,
               lastName: lastName,
               email: email,
               username: username,
               password: hash,
          });
          res.json("SUCCESS");
     });
});

router.post("/login", async (req, res) => {
     const { username, password } = req.body;

     const user = await Users.findOne({ where: { username: username } });

     if (!user) res.json({ error: "User Doesn't Exist" });

     bcrypt.compare(password, user.password).then((match) => {
          if (!match) res.json({ error: "Wrong Username And Password Combination" });

          res.json("YOU LOGGED IN!!!");
     });

     const accessToken = sign(
          { username: user.username, id: user.id },
          "importantsecret"
        );
        res.json({ token: accessToken, username: username, id: user.id });
});

router.get("/auth", validateToken, (req, res) => {
     res.json(req.user);
   });

module.exports = router;