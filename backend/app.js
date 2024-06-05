// MODULES

const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cookieParser = require("cookie-parser");

// IMPORTS
const projectRoutes = require("./routes/projectRoutes");

// SETUP
const app = express();

// MIDDLEWARE

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// ROUTES
app.use("/api/projects", projectRoutes);

// EXPORTS
module.exports = app;
