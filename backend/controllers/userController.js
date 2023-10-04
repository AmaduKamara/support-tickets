const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User Model
const User = require("../models/userModel");

// @Dec     Register a new user
// @Route   /api/users
// @Access  Public
const registerUser = asyncHandler(async (req, res) => {
  // 1. destructure the user data from the req body
  const { name, email, password } = req.body;

  // 2. validate data sent from the body
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  // 3. Find and check if user already exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  // 4. Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 5. Create user
  const user = await User.create({ name, email, password: hashedPassword });

  // Return data for created user to be used later or throw an error
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id), // generate a tokan and pass it to a user that's being registered
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
  // 1. destructure the user credentials from the req body
  const { email, password } = req.body;

  // 2. Find user by email
  const user = await User.findOne({ email });

  // Check if password matches and return user data an the token for the user
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id), // generate a tokan and pass it to a user that's loggedin
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

// @Dec     Get current user
// @Route   /api/users/me
// @Access  Private
const getMe = asyncHandler(async (req, res) => {
  // 1. Get the user by their id
  const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
  };
  res.status(200).json(user);
});

// Generate a token for a user for when registered and loggedin
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
