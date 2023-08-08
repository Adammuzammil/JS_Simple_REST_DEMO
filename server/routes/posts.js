const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

//Gives back all the data
router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const data = await post.save();
    res.json(data);
  } catch (error) {
    res.json({ message: err });
  }
});

//Gives back posts with specific ID
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

//Delete
router.delete("/:postId", async (req, res) => {
  try {
    const deletedpost = await Post.deleteOne({ _id: req.params.postId });
    res.json(deletedpost);
  } catch (error) {
    res.json({ message: error });
  }
});

//Update
router.patch("/:postId", async (req, res) => {
  try {
    const deletedpost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(deletedpost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
