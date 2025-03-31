const express = require("express");
const router = express.Router();
const Gallery = require("../model/Gallery");
const mongoose = require("mongoose");
const checkAuth = require("../middleware/checkAuth");

// Add Gallery
router.post("/", checkAuth, async (req, res) => {
  try {
    const newGallery = new Gallery({
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      userId: req.user.userId,
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
    const galleries = await Gallery.find({ userId: req.user.userId }).select(
      "_id title imageUrl userId createdAt updatedAt"
    );
    res.status(200).json({ success: true, galleries });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get All Gallery
router.get("/public", async (req, res) => {
  try {
    const galleries = await Gallery.find().select(
      "_id title imageUrl createdAt updatedAt"
    );
    res.status(200).json({ success: true, galleries });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Get Gallery by ID
router.get("/:id", checkAuth, async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id)
      .populate("userId", "firstName lastName")
      .select("_id userId title imageUrl authorName createdAt updatedAt");

    if (!gallery) {
      return res
        .status(404)
        .json({ success: false, message: "Gallery not found" });
    }

    res.status(200).json({ success: true, gallery });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update Gallery
router.put("/:id", checkAuth, async (req, res) => {
  try {
    const updatedGallery = await Gallery.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
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
    const result = await Gallery.deleteOne({
      _id: req.params.id,
      userId: req.user.userId,
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
