$(document).ready(function(){
    
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
        sessionStorage.clear();
        window.location.replace("/");
    });

    //puts the character name at top of page
    $("#charName").text(sessionStorage.getItem("character"))

    //get char stats
    $.get("/api/character/" + sessionStorage.getItem("character"), function(result){
        $("#skill_R").text(result.skill_R);
        $("#skill_K").text(result.skill_K);
        $("#skill_G").text(result.skill_G);
        $("#skill_S").text(result.skill_S);
        $("#skill_D").text(result.skill_D);
    });
});