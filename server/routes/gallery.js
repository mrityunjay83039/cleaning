const express = require("express");
const router = express.Router();
const Gallery = require("../model/Gallery");
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

// Add Gallery
router.post("/", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const newGallery = new Gallery({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      userId: verify.userId,
    });

    const result = await newGallery.save();
    res.status(201).json({ success: true, newGallery: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get All Gallery
router.get("/", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const galleries = await Gallery.find({ userId: verify.userId }).select(
      "_id title imageUrl userId"
    );
    res.status(200).json({ success: true, galleryList: galleries });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update Gallery
router.put("/:id", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const updatedGallery = await Gallery.findOneAndUpdate(
      { _id: req.params.id, userId: verify.userId },
      {
        $set: {
          title: req.body.title,
          imageUrl: req.body.imageUrl,
        },
      },
      { new: true }
    );

    if (!updatedGallery) {
      return res
        .status(404)
        .json({ success: false, msg: "Gallery Image not found" });
    }
    res.status(200).json({ success: true, updatedGallery: updatedGallery });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete Gallery
router.delete("/:id", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const result = await Gallery.deleteOne({
      _id: req.params.id,
      userId: verify.userId,
    });

    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ success: false, msg: "Gallery image not found" });
    }
    res.status(200).json({ success: true, msg: "Gallery Image deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
