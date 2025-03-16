const express = require("express");
const router = express.Router();
const Comment = require("../model/Comment");
const mongoose = require("mongoose");
const checkAuth = require("../middleware/checkAuth");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "zibrish 123";

// Middleware to verify JWT
const verifyToken = (req) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) throw new Error("Unauthorized: No token provided");
  return jwt.verify(token, JWT_SECRET);
};

// Add New Comment
router.post("/", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);

    const newComment = new Comment({
      _id: new mongoose.Types.ObjectId(),
      userId: verify.userId,
      userName: `${verify.firstName} ${verify.lastName}`,
      comment: req.body.comment,
      blogId: req.body.blogId,
    });

    const result = await newComment.save();
    res.status(201).json({ success: true, newComment: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// Update Comment
router.put("/:id", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);

    const updatedComment = await Comment.findOneAndUpdate(
      { _id: req.params.id, userId: verify.userId },
      { $set: { comment: req.body.comment } },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(400).json({ success: false, msg: "Comment not found" });
    }

    res.status(200).json({ updatedComment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// Delete Comment
router.delete("/:id", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);

    const result = await Comment.deleteOne({
      _id: req.params.id,
      userId: verify.userId,
    });

    if (result.deletedCount === 0) {
      return res
        .status(400)
        .json({ success: false, msg: "Comment not found or unauthorized" });
    }

    res.status(200).json({ success: true, msg: "Comment deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// Get Comments for any blog
router.get("/getblogscomment/:blogId", async (req, res) => {
  try {
    const comments = await Comment.find({ blogId: req.params.blogId }).select(
      "_id userId blogId userName comment"
    );

    res.status(200).json({ success: true, comments: comments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
