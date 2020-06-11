const express = require("express");
const server = require("../server");
const users = require("../users/userDb");

const validateUser = require("../middleware/validateUser");
const validateUserId = require("../middleware/validateUserId");
const validatePost = require("../middleware/validatePost");

const router = express.Router();

server.use(validateUser);
server.use(validateUserId);
server.use(validatePost);

router.post("/", (req, res) => {
  // do your magic!
});

router.post("/:id/posts", (req, res) => {
  // do your magic!
});

router.get("/", (req, res) => {
  // do your magic!
});

router.get("/:id", (req, res) => {
  // do your magic!
});

router.get("/:id/posts", (req, res) => {
  // do your magic!
});

router.delete("/:id", (req, res) => {
  // do your magic!
});

router.put("/:id", (req, res) => {
  // do your magic!
});

module.exports = router;
