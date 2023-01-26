const express = require("express");
const http = require("http");
const morgan = require("morgan");
const app = express();
const server = http.createServer(app);
const dotenv = require("dotenv");
const cors = require("cors");
const database = require("./utilities/database");
const compose = require("./utilities/composer");

const init = async () => {
  // Initialise dotenv
  dotenv.config();
  
  compose.log("init", "Creating database connection pool");
  const db = await database.connect();

  // If no connection was established, exit application
  if (!db) {
    compose.log("error", "Failed to create database connection pool, exiting.");
    process.exit(1);
  }
  compose.log("init", "Connected to database");

  // Enable morgan as logger
  app.use(morgan("dev"));

  // Configure cors to accept any origin
  app.use(
    cors({
      origin: "*",
    })
  );

  // Use router for all traffic
  app.use(require("./routes/router"));

  // Listen on specified port, or port 3000
  server.listen(process.env.PORT || 3000, () => {
    compose.log(
      "init",
      `Started backend instance on port ${process.env.port || 3000}`
    );
  });
};

init();
