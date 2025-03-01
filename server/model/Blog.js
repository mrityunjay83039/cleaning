const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: { type: String, require: true },
  title: { type: String, require: true },
  imageUrl: { type: String, require: true },
  categoryTitle: { type: String, require: true },
  categoryId: { type: String, require: true },
  blogDetail: { type: String, require: true },
  authorName: { type: String, require: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Blog", blogSchema);
