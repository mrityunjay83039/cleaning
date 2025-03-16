const express = require("express");
const router = express.Router();
const User = require("../model/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkAuth = require("../middleware/checkAuth");

const jwtSecret = process.env.JWT_SECRET || "defaultSecretKey";
const refreshSecret =
  process.env.REFRESH_SECRET_KEY || "defaultRefreshSecretKey";

let refreshTokens = [];

router.post("/signup", async (req, res) => {
  try {
    console.log("Signup post request");
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, msg: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      userType: req.body.userType,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ success: true, newUser: savedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, msg: "User does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, msg: "Invalid password" });
    }

    const payload = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      userId: user._id,
    };

    const accessToken = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });
    const refreshToken = jwt.sign(payload, refreshSecret, { expiresIn: "7d" });

    // Save refresh token in the database
    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      userId: user._id,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

router.post("/refresh", async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res
      .status(401)
      .json({ success: false, msg: "Refresh token is required" });
  }

  // Find user with the given refresh token
  const user = await User.findOne({ refreshToken });

  if (!user) {
    return res
      .status(403)
      .json({ success: false, msg: "Invalid refresh token" });
  }

  jwt.verify(refreshToken, refreshSecret, async (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, msg: "Invalid refresh token" });
    }

    const newAccessToken = jwt.sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userId: user._id,
      },
      jwtSecret,
      { expiresIn: "1h" }
    );

    // Optional: Rotate refresh token (Generate a new one)
    const newRefreshToken = jwt.sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userId: user._id,
      },
      refreshSecret,
      { expiresIn: "7d" }
    );

    user.refreshToken = newRefreshToken;
    await user.save();

    res.status(200).json({
      success: true,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
});

router.post("/logout", checkAuth, async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res
      .status(400)
      .json({ success: false, msg: "Refresh token required" });
  }

  // Find user and remove the refresh token
  const user = await User.findOne({ refreshToken });

  if (!user) {
    return res
      .status(400)
      .json({ success: false, msg: "User not found or already logged out" });
  }

  user.refreshToken = null;
  await user.save();

  res.status(200).json({ success: true, msg: "Logged out successfully" });
});

module.exports = router;
