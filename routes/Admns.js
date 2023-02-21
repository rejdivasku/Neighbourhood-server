const express = require("express");
const router = express.Router();
const { Admns } = require("../models");
const { validateToken } = require("../middlewares/Auth");

router.get("/admnsId/:id", async (req, res) => {
     const id = req.params.id;
     const admnst = await Admns.findAll({
       where: {
         id: id
       }
     });
     res.json(admnst);
   });

router.post("/", async (req, res) => {


     try {
          const admnst = req.body;
          await Admns.create(admnst);
          res.json(admnst);
          } catch (err) {
            console.log(err)
          }



  
});

module.exports = router;