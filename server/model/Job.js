const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true},
    imageUrl: { type: String },
    jobDetail: { type: String, required: true, minlength: 10 },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

jobSchema.index({ title: 1, userId: 1 }, { unique: true });

module.exports = mongoose.model("Job", jobSchema);
