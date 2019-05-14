var db = require("../models");
const md5 = require("md5");

module.exports = function (app) {
  // add a new user if none exists
  //returns false if username is already taken
  app.post("/api/users", function (req, res) {
    db.User.findOrCreate({
      where: {
        username: req.body.username,
      },
    }).then(([user, created]) => {
      if (created) {
        db.User.update(
          { password: md5(req.body.password) },
          { where: { username: req.body.username } },
        ).then(function (results) {
          console.log("findorcreate: "+results);

        });
      }
      res.send(created);
    });
  });

  //check user login (POST)
  app.post("/api/login", function (req, res) {
    // console.log("un: " + req.body.username);
    // console.log("pw: " + req.body.password);

    var username = req.body.username;
    var password = md5(req.body.password);
    db.User.findOne({
      where: {
        username: username
      }
    }).then(function (result) {
      // console.log(result);
      if (!result) {
        return res.send("badName");
      }
      console.log(result.dataValues);

      if (password === result.dataValues.password) {
        console.log("logged in");
        req.session.user = username;
        res.json(result);
      }
      else {
        console.log("bad password");
        return res.send("badPass");
      };

    })

  });



  //check a user login
  // app.get("/api/users/:username/:password", function (req, res) {
  //   var username = req.params.username;
  //   var password = req.params.password;

  //   db.users.findOne({
  //     where: {
  //       username: username
  //     }
  //   }).then(function (result) {
  //     if (!result) {
  //       console.log("first send");
  //       return res.send("That username does not exist");
  //     }
  //     console.log(result.dataValues);

  //     if (password === result.dataValues.password) {
  //       console.log("logged in");
  //       // res.render("game.handlebars");
  //     }
  //     else {
  //       console.log("bad password");
  //       return res.send("Username and password do not match");
  //     };

  //   });
  // });

};
