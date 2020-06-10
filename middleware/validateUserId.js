const users = require("../users/userDb");

module.exports = () => {
  return (req, res, next) => {
    users.getById(req.params.id).then((user) => {
      if (user) {
        req.user = user;

        next();
      } else {
        res.status(400).json({
          message: "invalid user id",
        });
      }
    });
  };
};
