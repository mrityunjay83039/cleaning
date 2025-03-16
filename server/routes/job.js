const express = require("express");
const router = express.Router();
const Job = require("../model/Job");
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

// Add Job
router.post("/", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const newJob = new Job({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
      userId: verify.userId,
    });

    const result = await newJob.save();
    res.status(201).json({ success: true, newJob: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get All Jobs
router.get("/", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const jobs = await Job.find({ userId: verify.userId }).select(
      "_id title imageUrl description userId"
    );
    res.status(200).json({ success: true, jobList: jobs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update Job
router.put("/:id", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const updatedJob = await Job.findOneAndUpdate(
      { _id: req.params.id, userId: verify.userId },
      {
        $set: {
          title: req.body.title,
          imageUrl: req.body.imageUrl,
          description: req.body.description,
        },
      },
      { new: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ success: false, msg: "Job not found" });
    }
    res.status(200).json({ success: true, updatedJob: updatedJob });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete Job
router.delete("/:id", checkAuth, async (req, res) => {
  try {
    const verify = verifyToken(req);
    const result = await Job.deleteOne({
      _id: req.params.id,
      userId: verify.userId,
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ success: false, msg: "Job not found" });
    }
    res.status(200).json({ success: true, msg: "Job deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
