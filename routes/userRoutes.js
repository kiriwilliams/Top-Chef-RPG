var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.post("/api/users", function(req, res) {
    db.users.findOrCreate({
      where:{
        username: req.body.username,
      },
    }).then(([user, created]) => {
      if (created){
        console.log(req.body);
        db.users.update(
          {password: req.body.password},
          {where: {username: req.body.username}},
        ).then(function(results){
          console.log(results);
        })
    }
      res.send(user);
    });
  });

  // Create a new example
  app.get("/api/users", function(req, res) {
    db.users.findOne(req.body).then(function(result) {
      res.json(result);
    });
  });

};
