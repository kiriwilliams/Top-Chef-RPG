$(document).ready(function(){
    
    //go to different environments
    $(".environments").on("click", function(e){
        e.preventDefault();
        envId = $(this).data("id");
        window.location.replace("/game/" + envId);
    });

    //logout button
    $("#logout").on("click", function(e){
        e.preventDefault();
        //logout function
    });
    
    //puts the character name at top of page
    $("#charName").text(sessionStorage.getItem("character"))
});