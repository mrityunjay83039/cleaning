const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true, trim: true },
    imageUrl: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

gallerySchema.index({ title: 1 });

module.exports = mongoose.model("Gallery", gallerySchema);
