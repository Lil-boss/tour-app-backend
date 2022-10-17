const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
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
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    // img: {
    //   data: Buffer,
    //   contentType: String,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TourPackage", packageSchema);
