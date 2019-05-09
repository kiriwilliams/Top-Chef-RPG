var db = require("../models");

module.exports = function(app) {
  // add a new user if none exists
  //returns false if username is already taken
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
        });
    }
      res.send(created);
    });
  });

  //check a user login
  app.get("/api/users/:username", function(req, res) {
    console.log(req.params.username);
    db.users.findOne({
      where: {
        username: req.params.username
      }
    }).then(function(result) {
      console.log(result);
      // res.send(result);
      res.json(result);
    });
  });

};
