const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  timeLimit: {
    type: String, // Assuming timeLimit is in minutes or seconds
    required: true,
  },
  createdTime: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
