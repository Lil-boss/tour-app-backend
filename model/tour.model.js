const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    packageName: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      unique: true,
      minLength: [4, "name must be at least 4 characters"],
    },
    description: {
      type: String,
      required: true,
      data: Buffer,
      contentType: String,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    img: {
      type: String,
      required: true,
    },
    viewed: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TourPackage", tourSchema);
