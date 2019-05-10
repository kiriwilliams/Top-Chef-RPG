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
    var username = req.params.username;
    var password = req.params.username;
  
    db.users.findOne({
      where: {
        username: username
      }
    }).then(function(result) {
      if(!result){
        console.log("first send");
        return res.send("That username does not exist");
      }
      console.log(result.dataValues);

      if(password === result.dataValues.password){
        console.log("logged in");
        // res.render("game.handlebars");
      }
      else{
        console.log("bad password");
        return res.send("Username and password do not match");
      };

    });
  });

};
