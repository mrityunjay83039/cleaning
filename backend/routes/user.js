const express = require("express");
const router = express.Router();
const User = require("../model/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET || "defaultSecretKey";

router.post("/signup", async (req, res) => {
  try {
    console.log("Signup post request");
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ msg: "Email already exists" });
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
    res.status(201).json({ newUser: savedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ msg: "User does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ msg: "Invalid password" });
    }

    // Creating JWT token
    const token = jwt.sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userId: user._id,
      },
      jwtSecret,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      userId: user._id,
      token: token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
