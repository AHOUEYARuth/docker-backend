require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const taskRoutes = require("./routes/tasks");

mongoose.connect(process.env.DB_URL).then(() => console.log("connected !"));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

module.exports = app;
