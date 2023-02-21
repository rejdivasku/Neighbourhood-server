const express = require("express");
const router = express.Router();
const { Post, Category } = require("../models");

const { validateToken } = require("../middlewares/Auth");

router.get("/", async (req, res) => {
  const listOfPosts = await Post.findAll(
    {
      include: [
        { model: Category }
      ]
    }
  );
  res.json(listOfPosts);
});

router.get("/byAdmnsId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Post.findAll({
    where: {
      admnsUnit: id
    }
  });
  res.json(post);
});

router.post("/", async (req, res) => {
  const newPost = await Post.create(req.body);
  res.json(newPost);
});

router.put("/updatePost", validateToken, async (req, res) => {
  const { title, id, description, category, updatedBy, updatedById } = req.body;
  console.log(title, id, description, category, updatedBy, updatedById)
  await Post.update({ title: title, description: description, category: category, updatedBy: updatedBy, updatedById: updatedById }, { where: { id: id } });
});

router.delete("/:postId", validateToken, async (req, res) => {
  const postId = req.params.postId;
  await Post.destroy({
    where: {
      id: postId,
    },
  });

  res.json("DELETED SUCCESSFULLY");
});

module.exports = router;