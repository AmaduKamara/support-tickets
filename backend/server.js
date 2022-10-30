const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

// Routes
app.get("/", (req, res) => {
  res
    .status(201)
    .json({ message: "Welcome to the MERN Stack Support Tickets system" });
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}}`));
