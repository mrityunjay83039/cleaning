const express = require("express");
const router = express.Router();
const slugify = require("slugify");
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

const generateSlug = (title) => {
  try {
    return slugify(title, { lower: true, strict: true });
  } catch (err) {
    throw new Error("Error generating slug");
  }
};

// Add New Blog
router.post("/", checkAuth, async (req, res) => {
  try {
    const { userId, firstName, lastName } = req.user;
    const { title, imageUrl, categoryTitle, categoryId, blogDetail } = req.body;

    // Generate slug and check if it exists
    const slug = generateSlug(title);
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return res.status(400).json({
        success: false,
        message: "Blog with the same title already exists",
      });
    }

    // Create new blog
    const newBlog = new Blog({
      _id: new mongoose.Types.ObjectId(),
      userId,
      title,
      slug,
      imageUrl,
      categoryTitle,
      categoryId,
      blogDetail,
      authorName: `${firstName} ${lastName}`,
    });

    const result = await newBlog.save();
    res.status(201).json({ success: true, newBlog: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Get All Blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate("userId", "firstName lastName")
      .select(
        "_id userId title slug imageUrl categoryTitle categoryId blogDetail authorName"
      );

    res.status(200).json({ success: true, blogs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Get Blog by ID
router.get("/:id", checkAuth, async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid blog ID" });
    }

    const blog = await Blog.findById(id)
      .populate("userId", "firstName lastName")
      .select(
        "_id userId title slug imageUrl categoryTitle categoryId blogDetail authorName"
      );

    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    res.status(200).json({ success: true, blog });
  } catch (err) {
    console.error("Error fetching blog:", err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// ✅ Get Blog by Slug
router.get("/slug/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const blog = await Blog.findOne({ slug })
      .populate("userId", "firstName lastName")
      .select(
        "_id userId title slug imageUrl categoryTitle categoryId blogDetail authorName"
      );

    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    res.status(200).json({ success: true, blog });
  } catch (err) {
    console.error("Error fetching blog by slug:", err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// ✅ Get Blogs by Category
router.get("/blogs/category/:id", async (req, res) => {
  try {
    const blogs = await Blog.find({ categoryId: req.params.id });

    if (!blogs.length) {
      return res
        .status(404)
        .json({ success: false, message: "No blogs found in this category" });
    }

    res.status(200).json({ success: true, blogs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Get User's Own Blogs
router.get("/myblogs", checkAuth, async (req, res) => {
  try {
    const { userId } = req.user;
    const blogList = await Blog.find({ userId }).select(
      "_id title slug imageUrl categoryTitle categoryId blogDetail authorName"
    );

    res.status(200).json({ success: true, blogList });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Delete Blog
router.delete("/:id", checkAuth, async (req, res) => {
  try {
    const { userId } = req.user;
    const result = await Blog.deleteOne({ _id: req.params.id, userId });

    if (result.deletedCount === 0) {
      return res
        .status(401)
        .json({ success: false, message: "Blog not found or unauthorized" });
    }

    res.status(200).json({ success: true, message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Update Blog
router.put("/:id", checkAuth, async (req, res) => {
  try {
    const { userId, firstName, lastName } = req.user;
    const { title, imageUrl, categoryTitle, categoryId, blogDetail } = req.body;

    // Generate a new slug
    const slug = generateSlug(title);

    // Check if another blog already has this slug
    const existingBlog = await Blog.findOne({
      slug,
      _id: { $ne: req.params.id },
    });
    if (existingBlog) {
      return res
        .status(400)
        .json({ success: false, message: "Slug already exists" });
    }

    // Update blog
    const updatedBlog = await Blog.findOneAndUpdate(
      { _id: req.params.id, userId },
      {
        $set: {
          title,
          slug,
          imageUrl,
          categoryTitle,
          categoryId,
          blogDetail,
          authorName: `${firstName} ${lastName}`,
        },
      },
      { new: true }
    );

    if (!updatedBlog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found or unauthorized" });
    }

    res.status(200).json({ success: true, updatedBlog });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
