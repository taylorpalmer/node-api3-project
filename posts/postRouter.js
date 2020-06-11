const express = require("express");
const server = require("../server");
const posts = require("../posts/postDb");
const error = require("../middleware/error");

const validateUser = require("../middleware/validateUser");
const validateUserId = require("../middleware/validateUserId");
const validatePost = require("../middleware/validatePost");

const router = express.Router();

server.use(validateUser);
server.use(validateUserId);
server.use(validatePost);
server.use(error);

router.get("/", (req, res, next) => {
  posts
    .get()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:id", (req, res, next) => {
  posts
    .getById(req.params.id)
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/:id", (req, res, next) => {
  posts
    .remove(req.params.id)
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/:id", (req, res, next) => {
  posts
    .update(req.params.id, req.body.text)
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      next(error);
    });
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
