const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true },
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
