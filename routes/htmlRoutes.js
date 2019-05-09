var db = require("../models");

module.exports = function(app) {
  // Load login page, does not interact with database
  app.get("/", function(req, res) {
      res.render("index");
      console.log("index loaded");
  });

  // Load info about country and NPCs and return it to handlebars page
  app.get("/game/:id", function(req, res) {
    //country grab
    db.environments.findOne({ 
      
      where: {
        id: req.params.id
      },
      // include: [db.npc]

      }).then(function(result) {      
      res.render("game", {
        info: result
      });
      console.log("gamepage loaded with: " + result);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
    console.log("404 page");
  });
};
