var db = require("../models");

module.exports = function(app){

    // API CALL TO GET THE DISH MODIFIERS AT A SPECIFIC ENVIRONMENT
    app.get("/api/dish/:id", function(req, res) {
        db.Dishes.findOne({
            where: {
            id: req.params.id,
            }
        }).then(function(result) {
            res.json(result);
        });
    });

        //API CALL TO CREATE A CHARACTER
        app.post("/api/createCharacter", function(req,res){
            db.Character.create({
                name: req.body.name,
                skill_R: req.body.skill_R,
                skill_K: req.body.skill_K,
                skill_G: req.body.skill_G,
                skill_S: req.body.skill_S,
                skill_D: req.body.skill_D,
                UserId: req.body.UserId
            }).then(function(results) {
                // console.log(results.dataValues);
                res.json(results);
            });
        });
    

    // API CALL TO GET THE SELECTED CHARACTERS STATS 
    app.get("/api/character/:id", function(req, res) {
        db.Character.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(result){
            console.log("/api/character/:id result is "+ result);
            res.json(result);
        });
    });
    // API CALL TO GET THE NPC LINKED TO THE ENVIRONMENT 
    app.get("/api/npc/:id", function(req, res) {
        db.Npc.findOne({
            where: {
                EnvironmentId: req.params.id
            }
        }).then(function(result) {
            console.log(result);
            res.json(result);
        });
    });

    // API CALL TO UPDATE THE SKILLS OF A CHARACTER 
    app.put("/api/update/:id", function(req, res){
        db.Character.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        ).then(function(result) {
            res.json(result);
        });
    });

    // API CALL TO UPDATE THE DISH BOOLEAN
    app.put("/api/update/dish/:id", function(req, res){
        db.Dishes.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        ).then(function(result) {
            res.json(result);
        });
    });

    app.get("/api/environment/:id", function(req, res){
        db.Environment.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(result){
            res.json(result);
        });
    });

};