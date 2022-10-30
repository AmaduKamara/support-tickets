const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  // 1. Init a token variable for the current user
  let token;

  // 2. Check for the headers and if the headers starts with Bearer
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // 3. Get the token from the header and assign it to the token variable
      token = req.headers.authorization.split(" ")[1];

      // 4. Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 5. Get user from token and exclude their password from the decoded verified user
      req.user = await User.findById(decoded.id).select("-password");

      // call the next() so other middleware run
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  // If no token is found
  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }
});

module.exports = { protect };
