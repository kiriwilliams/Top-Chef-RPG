var db = require("../models");

module.exports = function (app) {
  // Load login page, does not interact with database
  app.get("/", function (req, res) {
    res.render("index");
    console.log("index loaded");
  });

  // Load info about country and NPCs and return it to handlebars page
  app.get("/game/:id", function (req, res) {
    //country grab
    db.Environment.findOne({

      where: {
        id: req.params.id
      },
      include: [db.Npc, db.Dishes]

    }).then(function (result) {
      var info = result.dataValues;
      res.render("game", info);
      console.log(info);
    });
  });

  //loads charselect page, assosciated with user
  app.get("/character-select/:userId", function (req, res) {
    // console.log(req);
    console.log(!req.session.user);

    if (!req.session.user){
      res.redirect("/");
    }
    else{

      db.Character.findAll({
        where: {
          userId: req.params.userId
        }
      }).then(function (result) {
        console.log(result);
        var characters = result;
        res.render("character-select", characters);
  
      });
    }

  });

  //loads home page with character
  app.get("/home", function (req, res){
    if (!req.session.user){
      res.redirect("/");
    }
    else if (!req.session.character){
      res.redirect("/character-select/" + req.session.user);
    }
    else {
        res.render("dash", characters);
    }
  });

};

