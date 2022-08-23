const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlewares/errorMiddleware");

const { connectDB } = require("./config/db");

const PORT = process.env.PORT || 8000;

// Connect to Mongo database
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

// Default route
app.get("/", (res) => {
  res.status(200).json({ message: "Welcome to Support Desk API" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
