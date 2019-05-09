$(document).ready(function(){

    //different possible on click events
    $(document).on("click", ".environmentsButtons", updateEnv);
    $(document).on("click", ".optionsButtons", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        getDish(id);
        getDishScore(selected_dish, character, npc);        
    })

    //maybe neccesary create js
    $(document).on("submit", ".createUser", function(event){
        event.preventDefault();        
        var newData = {
            username: $("#username").val().trim(),
            password: $("#password").val().trim()
        }
        $.ajax("/api/users", {
            type: "POST",
            data: newData
        }).then(function(){

        })
    })
    
    //update environment when new one selected
    function updateEnv(event){
        event.preventDefault();
        
        $.get("/api/environment/:id")
            .then(function(data){
                $(".body").css("background-img", data.background);
                environment = data;
            });
        getChar();
        getNPC(environment.id);
    }

//PAGE .js GLOBAL VARIABLES
var selected_dish = {};
var character = {};
var npc = {};
var environment;
var user = {};

// PAGE .js FUNCTION TO GET THE DISH MODIFIERS
function getDish(dish_id){
    $.ajax({
        method: "GET",
        url: "api/dish/" + dish_id
    }).then(function(result) {
        selected_dish = result;
    })
};

// PAGE .js FUNCTION TO GET THE SELECTED CHRACTERS STATS
function getChar(char_id) {
    $.ajax({
        method: "GET",
        url: "api/character/" + char_id
    }).then(function(result){
        character = result;
    });
};

// PAGE .js FUNCTION TO CALCULATE THE USERES SELECTED DISHES SCORE
function getDishScore (selected_dish, character, npc) {
    var dish_score = (selected_dish.mod_F * character.skill_F) + (selected_dish.mod_J * character.skill_J) + (selected_dish.mod_T * character.skill_T) + (selected_dish.mod_C * character.skill_C) + (selected_dish.mod_I * character.skill_I);
    var npc_text = "";

    if (dish_score > npc.score_threshold) {
        switch (env_id) {
            case 1: 
                npc_text = "FRENCH IRON CHEF DIALOGUE GOES HERE";
                levelUp("skill_F", (character.skill_F++));
                break;
            case 2:
                npc_text = "JAPANESE IRON CHEF DIALOGUE GOES HERE";
                levelUp("skill_J", (character.skill_J++));
                break;
            case 3: 
                npc_text = "ITALIAN IRON CHEF DIALOGUE GOES HERE";
                levelUp("skill_T", (character.skill_T++));
                break;
            case 4:
                npc_text = "CHINESE IRON CHEF DIALOGUE GOES HERE";
                levelUp("skill_C", (character.skill_C));
                break;
            case 5:
                npc_text = "INDIAN IRON CHEF DIALOGUE GOES HERE";
                levelUp("skill_I", (character.skill_I));
                break;

            default:
            break;
        };
    }
    else {
        switch (env_id) {
            case 1: 
                npc_text = "FRENCH IRON CHEF DIALOGUE GOES HERE";
                levelUp("skill_F", (character.skill_F++));
                break;
            case 2:
                npc_text = "JAPANESE IRON CHEF DIALOGUE GOES HERE";
                levelUp("skill_J", (character.skill_J++));
                break;
            case 3: 
                npc_text = "ITALIAN IRON CHEF DIALOGUE GOES HERE";
                levelUp("skill_T", (character.skill_T++));
                break;
            case 4:
                npc_text = "CHINESE IRON CHEF DIALOGUE GOES HERE";
                levelUp("skill_C", (character.skill_C));
                break;
            case 5:
                npc_text = "INDIAN IRON CHEF DIALOGUE GOES HERE";
                levelUp("skill_I", (character.skill_I));
                break;

            default:
            break;
        };
    }

    $(".flavour_text").text(npc_text);

};

// PAGE .js FUNCTION TO GENERATE A SKILL LEVEL UP
function levelUp ( skill, newValue ){
    var obj = { id: character.id };
    obj[skill] = newValue;

    $.ajax({
        method: "PUT",
        url: "api/update/"+ skill,
        data: obj
    }).then(function(result) {
        console.log(result);
    });
}
// PAGE .js FUNCTION TO GET THE NPC ASSOCIATED TO THE ENVIRONMENT
function getNPC (env_id) {
    $.ajax({
        method:"GET",
        url: "api/npc/"+env_id
    }).then(function(result) {
        npc = result;
    });
};
});