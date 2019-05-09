var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.post("/api/users", function(req, res) {
    db.users.create({
      username: req.body.username,
      password: req.body.password
    }).then(function(result) {
      res.json(result);
    });
  });

  // Create a new example
  app.get("/api/users", function(req, res) {
    db.users.findOne(req.body).then(function(result) {
      res.json(result);
    });
  });

};
