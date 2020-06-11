const express = require("express");
const server = require("../server");
const users = require("../users/userDb");

const validateUser = require("../middleware/validateUser");
const validateUserId = require("../middleware/validateUserId");
const validatePost = require("../middleware/validatePost");
const error = require("../middleware/error");

const router = express.Router();

server.use(validateUser);
server.use(validateUserId);
server.use(validatePost);
server.use(error);

router.post("/", validateUser(), (req, res, next) => {
  users
    .insert()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

router.post(
  "/:id/posts",
  validateUser(),
  validateUserId(),
  (req, res, next) => {
    users
      .insert()
      .then((user) => {
        res.status(200).json(user);
      })
      .catch(next);
  }
);

router.get("/", (req, res, next) => {
  users
    .get()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:id", validateUser(), (req, res, next) => {
  users
    .getById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:id/posts", validateUserId(), (req, res, next) => {
  users
    .get()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/:id", validateUserId(), (req, res, next) => {
  users
    .remove(req.params.id)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/:id", validateUser(), validateUserId(), (req, res, next) => {
  users
    .update(req.params.id, req.body)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          message: "The user could not be found",
        });
      }
    })
    .catch(next);
});

module.exports = router;
