const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();

app.use(bodyParser.json());

//mongoDB connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to the MongoDB");
});

//middlewares
app.use("/api", studentRoutes); // Use /api as the base path for student-related routes
app.use(express.json()); // Use express.json
app.use("/api/students", studentRoutes);

app.listen(3500, () => {
  console.log("server is running!");
});
