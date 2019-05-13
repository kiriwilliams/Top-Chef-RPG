  //PAGE .js GLOBAL VARIABLES
  var character = {};
  var npc = {};
  var selected_btns = [];
  var environment;

  var userID = 1;
  var charID = 1;
  var envID = 1;

//    var userID = sessionStorage.getItem("userID");
//    var character = sessionStorage.getItem("char");
//    var envID = sessionStorage.getItem("envID");

  //DUE TO UNFORSEEN CIRCUMSTANCES THIS BUTTON DOESN"T WORK ANYMORE. NEEDS TO BE FIXED
  //TO BE ABLE TO LINK BACK TO THE CHARACTER HOMEPAGE. 
  $(document).on("click", "#return-btn", function(e){
      e.preventDefault();

      $.get("/api/environment/" + envID)
          .then(function(result){
              // function to recieve the NPC associated to the environment selected
              function getNPC( envID ){
                  $.ajax({
                      method: "GET",
                      url: "api/npc/" + envID
                  }).then(function(result) {
                      npc = result;
                  });
              }

              environment = result;
              getNPC(environment.id);
          });
  });

  $(document).on("click", "#dish-btn", function(e){
    // GET THE DISH MODIFIERS FOR THE SELECTED DISH
    function getDish(dishID){
      $.ajax("/api/dish/" + dishID, {
          method: "GET"
      }).then(function(result) {
          selected_dish = result;
          console.log(selected_dish);
          getDishScore(selected_dish, character, npc);        
      });
    };
    
    // UPDATE THE SELECTED BOOLEAN OF THE SELECTED DISH
    function selectDish (dishID){
      var obj = { selected: true };

      $.ajax("/api/update/dish/"+ dishID, {
          method: "PUT",
          data: obj
      }).then(function(result) {
        $('#dishes-div').load(document.URL +  ' #dishes-div');
      });
    }

    // USE THE SELECTED DISH AND CHARACTER STATS TO GENERATE DISH RESULT
    function getDishScore (selected_dish, character, npc) {
      var dish_score = (selected_dish.mod_R * character.skill_R) + (selected_dish.mod_K * character.skill_K) + (selected_dish.mod_G * character.skill_G) + (selected_dish.mod_S * character.skill_S) + (selected_dish.mod_D * character.skill_D);
      var npc_text = "";

      npc.HP = npc.HP - (dish_score * 10);
      var npc_pct_HP = (npc.HP / (npc.score_threshold * 10)) * 100;

      $(".progress-bar").attr("aria-valuenow", npc_pct_HP);
      $(".progress-bar").attr("style", "width: " + npc_pct_HP + "%");

      console.log("getDishSchore :" + dish_score);
      console.log("NPC HP: " + npc.HP);        

      if (npc.HP < 0) {
        console.log("In victory you gain significant experience!");
        switch (environment.id) {
          case 1: 
              npc_text = "ITALIAN IRON CHEF DIALOGUE GOES HERE";
              levelUp(true, "skill_G", "skill_S", "skill_D");
              break;
          case 2:
              npc_text = "FRENCH IRON CHEF DIALOGUE GOES HERE";
              levelUp(true, "skill_R", "skill_K", "skill_G");
              break;
          case 3: 
              npc_text = "JAPANESE IRON CHEF DIALOGUE GOES HERE";
              levelUp(true, "skill_G", "skill_D", "skill_K");
              break;
          case 4:
              npc_text = "CHINESE IRON CHEF DIALOGUE GOES HERE";
              levelUp(true, "skill_K", "skill_D", "skill_R");
              break;
          case 5:
              npc_text = "INDIAN IRON CHEF DIALOGUE GOES HERE";
              levelUp(true, "skill_S", "skill_S", "skill_R");
              break;

          default:
          break;
        };
      }
      else if (selected_btns.length === 3) {
        console.log("Even in defeat you gain valuable experience!");
        switch (environment.id) {
          case 1: 
              npc_text = "ITALIAN IRON CHEF DIALOGUE GOES HERE";
              levelUp(false, "skill_G", "skill_S", "skill_D");
              break;
          case 2:
              npc_text = "FRENCH IRON CHEF DIALOGUE GOES HERE";
              levelUp(false, "skill_R", "skill_K", "skill_G");
              break;
          case 3: 
              npc_text = "JAPANESE IRON CHEF DIALOGUE GOES HERE";
              levelUp(false, "skill_G", "skill_D", "skill_K");
              break;
          case 4:
              npc_text = "CHINESE IRON CHEF DIALOGUE GOES HERE";
              levelUp(false, "skill_K", "skill_D", "skill_R");
              break;
          case 5:
              npc_text = "INDIAN IRON CHEF DIALOGUE GOES HERE";
              levelUp(false, "skill_S", "skill_S", "skill_R");
              break;

          default:
          break;
        };
      }
          
      selectDish(dishID);
  
    };
    
    e.preventDefault();
    if (npc.HP > 0) {
      var selected_dish = {};
      var dishID = $(this).data("id");
  
      selected_btns.push(dishID);
  
      getDish(dishID);  
    }
  });

  // PAGE .js FUNCTION TO GENERATE A SKILL LEVEL UP
  function levelUp ( outcome, skillOne, skillTwo, skillThree){
    var updated_skills = [skillOne, skillTwo, skillThree];

    for (let i = 0; i < updated_skills.length; i++) {
      if (outcome) {
        character[updated_skills[i]] = character[updated_skills[i]] + 2;
      }
      else {
        character[updated_skills[i]] = character[updated_skills[i]] + 1;
      }
    }

    var obj = {
      skill_R: character.skill_R,
      skill_K: character.skill_K,
      skill_G: character.skill_G,
      skill_S: character.skill_S,
      skill_D: character.skill_D,
    };

    console.log("----------------------- lvlUP ---------------------");
    console.log("Changing character stats to the following: ");
    console.log( obj );
    console.log("---------------------------------------------------");

    $.ajax("/api/update/"+ character.id, {
        method: "PUT",
        data: obj
    }).then(function(result) {
        console.log("------ lvlUP Result -----");
        console.log(result);
        console.log("-------------------------");
    });
  };


// PAGE .js FUNCTION TO GET THE SELECTED CHRACTERS STATS
  function getChar(charID) {
      console.log("Get character happening with charID: " + charID)
      $.ajax("/api/character/" + charID, {
          method: "GET"
      }).then(function(result){
          character = result;
          console.log(character);
      });
  };

// PAGE .js FUNCTION TO GET ENVIRONMENT FOR STUFF?
  function getEnv(envID) {
      $.ajax("/api/environment/" + envID, {
          method: "GET"
      }).then(function(result){
          environment = result;
          console.log(environment);
      });
  };

  function getNPC(envID) {
      console.log("Get npc happening with envID: " + charID)
      $.ajax("/api/npc/" + envID, {
          method: "GET"
      }).then(function(result){
          npc = result;
          npc["HP"] = npc.score_threshold * 10;
          console.log(npc);
      });
  };

  getChar(charID);
  getNPC(envID);
  getEnv(envID);