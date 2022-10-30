const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// Connct to database
connectDB();

// Express app configuration
const app = express();

// Accepts json data from the body
app.use(express.json());

// Accept urlencoded boday data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res
    .status(201)
    .json({ message: "Welcome to the MERN Stack Support Tickets system" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));

// Error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
