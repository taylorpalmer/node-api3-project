const express = require("express");
const logger = require("./middleware/logger");

const server = express();
const port = 4000;

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

server.listen(port, () => {
  console.log("\n* Server Running on http://localhost:4000 *\n");
});

module.exports = server;
