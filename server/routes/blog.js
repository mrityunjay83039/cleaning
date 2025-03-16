const express = require("express");
const router = express.Router();
const Blog = require("../model/Blog");
const mongoose = require("mongoose");
const checkAuth = require("../middleware/checkAuth");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET || "zibrish 123";

// Middleware to verify JWT
const verifyToken = (req) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) throw new Error("Unauthorized: No token provided");
  return jwt.verify(token, JWT_SECRET);
};

// Add New Blog
router.post("/", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const newBlog = new Blog({
      _id: new mongoose.Types.ObjectId(),
      userId: verify.userId,
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      categoryTitle: req.body.categoryTitle,
      categoryId: req.body.categoryId,
      blogDetail: req.body.blogDetail,
      userName: `${verify.firstName} ${verify.lastName}`,
    });
    const result = await newBlog.save();
    res.status(201).json({ success: true, newBlog: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get All Blogs
router.get("/getallblogs", async (req, res) => {
  try {
    const blogs = await Blog.find().select(
      "_id userId categoryId categoryTitle title imageUrl userName blogDetail"
    );
    res.status(200).json({ success: true, blogs: blogs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get Blogs by Category
router.get("/getblogsbycategory/:id", async (req, res) => {
  try {
    const blogs = await Blog.find({ categoryId: req.params.id });
    if (!blogs.length)
      return res
        .status(404)
        .json({ success: false, msg: "No blogs found in this category" });
    res.status(200).json({ success: true, blogs: blogs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get Own Blogs
router.get("/", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const blogList = await Blog.find({ userId: verify.userId }).select(
      "_id userId categoryId categoryTitle title imageUrl userName blogDetail"
    );
    res.status(200).json({ success: true, blogList: blogList });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete Blog
router.delete("/:id", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const result = await Blog.deleteOne({
      _id: req.params.id,
      userId: verify.userId,
    });
    if (result.deletedCount === 0)
      return res
        .status(401)
        .json({ success: false, msg: "Blog not found or unauthorized" });
    res.status(200).json({ success: true, msg: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update Blog
router.put("/:id", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const updatedBlog = await Blog.findOneAndUpdate(
      { _id: req.params.id, userId: verify.userId },
      {
        $set: {
          title: req.body.title,
          imageUrl: req.body.imageUrl,
          categoryTitle: req.body.categoryTitle,
          categoryId: req.body.categoryId,
          blogDetail: req.body.blogDetail,
          userName: `${verify.firstName} ${verify.lastName}`,
        },
      },
      { new: true }
    );
    if (!updatedBlog)
      return res
        .status(404)
        .json({ success: false, msg: "Blog not found or unauthorized" });
    res.status(200).json({ success: true, updatedBlog: updatedBlog });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
