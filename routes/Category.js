const express = require("express");
const router = express.Router();
const { Category } = require("../models");

router.get("/", async (req, res) => {
  const listOfCategories = await Category.findAll();
  res.json(listOfCategories);
});

router.post("/", async (req, res) => {
  const cat = req.body;
  await Category.create(cat);
  res.json(cat);
});

module.exports = router;