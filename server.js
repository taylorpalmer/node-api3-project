const express = require("express");
const logger = require("./middleware/logger");

const server = express();

server.use(express.json());

server.use(logger("long"));

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use((err, req, res, next) => {
  console.log(err);

  res.status(500).json({
    message: "Something went wrong, please try again later",
  });
});

module.exports = server;
