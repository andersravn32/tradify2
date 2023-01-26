const express = require("express");
const http = require("http");
const morgan = require("morgan");
const app = express();
const server = http.createServer(app);
const dotenv = require("dotenv");
const database = require("./utilities/database");

const init = async () => {
  // Initialise dotenv
  dotenv.config();

  // Enable morgan as logger
  app.use(morgan("dev"));

  // Use router for all traffic
  app.use(require("./routes/router"));

  server.listen(process.env.PORT, () => {
    console.info("Started backend instance")
  });
};

init();
