const express = require("express");
const logger = require("./middleware/logger");
const postRouter = require("./posts/postRouter");
const userRouter = require("./users/userRouter");

const server = express();

server.use(express.json());

server.use(logger("long"));
server.use("/users", userRouter);
server.use("/posts", postRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//error middleware//
server.use((err, req, res, next) => {
  console.log(err);

  res.status(500).json({
    message: "Something went wrong, please try again later",
  });
});

module.exports = server;
