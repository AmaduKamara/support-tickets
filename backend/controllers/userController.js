const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

// User Model
const User = require("../models/userModel");

// @Dec     Register a new user
// @Route   /api/users
// @Access  Public
const registerUser = asyncHandler(async (req, res) => {
  // destructure the user data from the req body
  const { name, email, password } = req.body;

  // validate data sent from the body
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  // Find if user already exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @Dec     Login a user
// @Route   /api/users/login
// @Access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login Route");
});

module.exports = {
  registerUser,
  loginUser,
};
