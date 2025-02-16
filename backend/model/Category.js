const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: { type: String, require: true },
  title: { type: String, require: true },
  imageUrl: { type: String, require: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Category", categorySchema);
