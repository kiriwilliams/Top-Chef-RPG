$(document).ready(function(){
    
    if(!window.sessionStorage.getItem("userId")){
        window.location.replace("/");
    }


    //go to different environments
    $(".environments").on("click", function(e){
        e.preventDefault();
        envId = $(this).data("id");
        window.location.replace("/game/" + envId);
        window.sessionStorage.setItem("environment", envId);
    });

    //logout button
    $("#logout").on("click", function(e){
        e.preventDefault();
        //logout function
        $.get("/api/logout", function(result){
            console.log(result);
        });
        window.sessionStorage.clear();
        window.location.replace("/");
    });

    //puts the character name at top of page
    $("#charName").text(window.sessionStorage.getItem("charId"))

    //get char stats
    $.get("/api/character/" + window.sessionStorage.getItem("charId"), function(result){
        console.log(result);
        $("#charName").text(result.name);
        $("#skill_R").text(result.skill_R);
        $("#skill_K").text(result.skill_K);
        $("#skill_G").text(result.skill_G);
        $("#skill_S").text(result.skill_S);
        $("#skill_D").text(result.skill_D);
    });
});