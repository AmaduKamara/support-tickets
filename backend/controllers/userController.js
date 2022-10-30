const registerUser = (req, res) => {
  res.send("Register Routes");
};

const loginUser = (req, res) => {
  res.send("Login Route");
};

module.exports = {
  registerUser,
  loginUser,
};
