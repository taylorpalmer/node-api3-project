const express = require("express");
const users = require("../users/userDb");
const middleware = require("../middleware");

const router = express.Router();

router.post("/", middleware.validateUser, (req, res, next) => {
  users
    .insert()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

router.post(
  "/:id/posts",
  middleware.validateUserId,
  middleware.validateUser,
  (req, res, next) => {
    users
      .insert()
      .then((user) => {
        res.status(200).json(user);
      })
      .catch(next);
  }
);

router.get("/", middleware.validateUser, (req, res, next) => {
  users
    .get()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:id", middleware.validateUserId, (req, res, next) => {
  users
    .getById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:id/posts", middleware.validateUserId, (req, res, next) => {
  users
    .get()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/:id", middleware.validateUserId, (req, res, next) => {
  users
    .remove(req.params.id)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      next(error);
    });
});

router.put(
  "/:id",
  middleware.validateUser,
  middleware.validateUserId,
  (req, res, next) => {
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
  }
);

module.exports = router;
