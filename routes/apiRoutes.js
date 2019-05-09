// API CALL TO GET THE DISH MODIFIERS AT A SPECIFIC ENVIRONMENT
app.get("/api/dish/:id", function(req, res) {
    db.dishes.findOne({
        where: {
        id: req.params.id,
        }
    }).then(function(result) {
        console.log(result);    
        res.json(result);
    });
});

// API CALL TO GET THE SELECTED CHARACERS STATS 
app.get("/api/character/:id", function(req, res) {
    db.characters.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(result){
        console.log(result);
        res.json(result);
    });
});

// API CALL TO UPDATE THE SKILL OF A CHARACTER 
app.put("/api/update/:skill", function(req, res){
    db.characters.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        }
    ).then(function(result) {
        res.json(result);
    });
});