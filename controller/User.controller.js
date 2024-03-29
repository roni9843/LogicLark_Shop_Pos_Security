const User = require("../models/User.model");

const findUserTimeLimitController = async (req, res, next) => {
  try {
    // Extracting user ID from request parameters
    const { userId } = req.body;

    console.log(userId);

    // Finding the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found", status: false });
    }

    // If the user is found, send the user data in the response
    res.status(200).json({ user });
  } catch (error) {
    // Handling errors
    res.status(500).json({ message: "User not found", status: false });
  }
};

const createUserWithTimeLimitController = async (req, res, next) => {
  try {
    // Extracting data from the request body
    const { username, timeLimit } = req.body;

    // Creating a new user instance
    const newUser = new User({
      username,
      timeLimit,
    });

    // Saving the user to the database
    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: savedUser,
      status: true,
    });
  } catch (error) {
    // Handling errors
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  findUserTimeLimitController,
  createUserWithTimeLimitController,
};
