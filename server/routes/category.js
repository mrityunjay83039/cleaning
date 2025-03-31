const express = require("express");
const router = express.Router();
const Category = require("../model/Category");
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

// Add Category
router.post("/", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const newCategory = new Category({
      _id: new mongoose.Types.ObjectId(),
      userId: verify.userId,
      title: req.body.title,
      imageUrl: req.body.imageUrl,
    });

    const result = await newCategory.save();
    res.status(201).json({ success: false, newCategory: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get All Categories
router.get("/", async (req, res) => {
  try {
    // Verify token and ensure user is authenticated
    const verify = await verifyToken(req);
    if (!verify || !verify.userId) {
      return res
        .status(401)
        .json({ success: false, error: "Unauthorized access" });
    }

    // Fetch categories belonging to the user
    const categories = await Category.find({ userId: verify.userId }).select(
      "_id userId title imageUrl"
    );

    res.status(200).json({ success: true, categoryList: categories });
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get All Categories (Public API)
router.get("/public", async (req, res) => {
  try {
    const categories = await Category.find().select("_id title imageUrl");

    res.status(200).json({ success: true, categoryList: categories });
  } catch (err) {
    console.error("Error fetching public categories:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get Category by ID
router.get("/:id", async (req, res) => {
  try {
    const verify = verifyToken(req);
    const categoryId = req.params.id;

    const category = await Category.findOne({
      _id: categoryId,
      userId: verify.userId,
    }).select("_id userId title imageUrl");

    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    res.status(200).json({ success: true, category });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete Category
router.delete("/:id", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const result = await Category.deleteOne({
      _id: req.params.id,
      userId: verify.userId,
    });

    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ success: false, msg: "Category not found" });
    }
    res.status(200).json({ success: true, msg: "Category deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update Category
router.put("/:id", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const updatedCategory = await Category.findOneAndUpdate(
      { _id: req.params.id, userId: verify.userId },
      { $set: { title: req.body.title, imageUrl: req.body.imageUrl } },
      { new: true }
    );

    if (!updatedCategory) {
      return res
        .status(404)
        .json({ success: false, msg: "Category not found" });
    }
    res.status(200).json({ success: true, updatedCategory: updatedCategory });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
