const asyncHandler = require("express-async-handler");

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
  console.log(req.body);
  res.send("Register Routes");
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
