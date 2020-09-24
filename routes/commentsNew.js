const express = require("express");
const ensureAuth = require("../middleware");
const { Comment } = require("../models/Comment");
const router = express.Router();

// const { User } = require("../models/User");

router.get("/", [ensureAuth], async (req, res) => {
  try {
    const { movieId } = req.query;
    const data = await Comment.find({ movieId });
    //.populate("author")
    //.sort({ createdAt: -1 })
    //.then((comments) => );
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message }).send();
  }
});

router.post("/", [ensureAuth], async (req, res) => {
  try {
    const { id } = req.user;
    const { movieId, content } = req.body;
    const comment = new Comment({
      movieId,
      content,
      author: id,
    });
    await comment.save();
    res.status(200).send();
  } catch (error) {
    res.status(400).json({ message: error.message }).send();
  }
});

module.exports = router;