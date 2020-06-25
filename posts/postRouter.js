const express = require("express");
const posts = require("../posts/postDb");

const router = express.Router();

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

router.delete("/:id", validatePost, (req, res, next) => {
  posts
    .remove(req.params.id)
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/:id", validatePost, (req, res, next) => {
  posts
    .update(req.params.id, req.body)
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      next(error);
    });
});

// custom middleware
function validatePost(req, res, next) {
  if (!req.body) {
    res.status(400).json({
      message: "missing post data",
    });
  } else if (!req.body.text) {
    res.status(400).json({
      message: "missing required text field",
    });
  }

  next();
}

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
