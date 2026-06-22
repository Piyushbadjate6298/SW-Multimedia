const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lead", leadSchema);