const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    imageUrl: { type: String, required: true },
    categoryTitle: { type: String, required: true },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    blogDetail: { type: String, required: true },
    authorName: { type: String, required: true },
  },
  { timestamps: true }
);

blogSchema.index({ title: 1 }, { unique: true });
blogSchema.index({ slug: 1 }, { unique: true });

module.exports = mongoose.model("Blog", blogSchema);
