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

// PRODUCTION
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
}

// ROUTES
app.use("/api/projects", projectRoutes);

// EXPORTS
module.exports = app;
