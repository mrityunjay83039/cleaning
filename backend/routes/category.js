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
    res.status(201).json({ newCategory: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Get All Categories
router.get("/", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const categories = await Category.find({ userId: verify.userId }).select(
      "_id userId title imageUrl"
    );
    res.status(200).json({ categoryList: categories });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
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
      return res.status(404).json({ msg: "Category not found" });
    }
    res.status(200).json({ msg: "Category deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
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
      return res.status(404).json({ msg: "Category not found" });
    }
    res.status(200).json({ updatedCategory });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
