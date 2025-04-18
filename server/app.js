require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
// Database connection
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

const userRoute = require("./routes/user");
const categoryRoute = require("./routes/category");
const blogRoute = require("./routes/blog");
const commentRoute = require("./routes/comment");
const jobRoute = require("./routes/job");
const galleryRoute = require("./routes/gallery");
// Middleware
app.use(express.json());
app.use(cors());

app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/blog", blogRoute);
app.use("/comment", commentRoute);
app.use("/job", jobRoute);
app.use("/gallery", galleryRoute);

app.use("*", (req, res) => {
  res.status(404).json({
    msg: "Bad Request",
  });
});

// Handle graceful shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});

module.exports = app;
