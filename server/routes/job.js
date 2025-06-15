const express = require("express");
const router = express.Router();
const Job = require("../model/Job");
const mongoose = require("mongoose");
const checkAuth = require("../middleware/checkAuth");
const generateUniqueSlug = require("../utils/generateUniqueSlug");

router.post("/", checkAuth, async (req, res) => {

  const slug = await generateUniqueSlug( req.body.title, Job, 'slug')

  try {
    const newJob = new Job({
      title: req.body.title,
      slug,
      imageUrl: req.body.imageUrl,
      jobDetail: req.body.jobDetail,
      userId: req.user.userId,
    });

    const result = await newJob.save();
    res.status(201).json({ success: true, newJob: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get All Jobs for the Logged-in User
router.get("/", checkAuth, async (req, res) => {
  try {
    const jobs = await Job.find({ userId: req.user.userId }).select(
      "_id title imageUrl slug jobDetail userId createdAt updatedAt"
    ).sort({ createdAt: -1 });
    res.status(200).json({ success: true, jobs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get All Jobs for Public user
router.get("/public", async (req, res) => {
  try {
    const jobs = await Job.find().select(
      "_id title imageUrl slug jobDetail createdAt updatedAt"
    ).sort({ createdAt: -1 });
    res.status(200).json({ success: true, jobs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Get Job by ID
router.get("/:id", checkAuth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate("userId", "firstName lastName")
      .select(
        "_id userId title imageUrl slug jobDetail authorName createdAt updatedAt"
      );

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    res.status(200).json({ success: true, job });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.get("/slug/:slug", async (req, res) => {

  try {

    const { slug } = req.params;

    if (!slug || typeof slug !== "string") {
      return res.status(400).json({ success: false, message: "Invalid slug" });
    }

    const job = await Job.findOne({ slug })
      .select(
        "_id title slug imageUrl jobDetail authorName createdAt updatedAt"
      )
      .lean();

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    res.status(200).json({ success: true, job });
  } catch (err) {
    console.error("Error fetching blog by slug:", err.message, err.stack);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// Update Job
router.put("/:id", checkAuth, async (req, res) => {
  try {

    const slug = await generateUniqueSlug( req.body.title, Job, 'slug')

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ success: false, msg: "Invalid Job ID" });
    }

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        slug,
        imageUrl: req.body.imageUrl,
        jobDetail: req.body.jobDetail,
      },
      { new: true, runValidators: true }
    );

    if (!updatedJob || updatedJob.userId.toString() !== req.user.userId) {
      return res
        .status(404)
        .json({ success: false, msg: "Job not found or unauthorized" });
    }

    res.status(200).json({ success: true, updatedJob });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete Job
router.delete("/:id", checkAuth, async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ success: false, msg: "Invalid Job ID" });
    }

    const job = await Job.findById(req.params.id);
    if (!job || job.userId.toString() !== req.user.userId) {
      return res
        .status(404)
        .json({ success: false, msg: "Job not found or unauthorized" });
    }

    await job.deleteOne();
    res.status(200).json({ success: true, msg: "Job deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
