
$(document).ready(function(){
    $("#newCharacter").on("click", function(e){
        e.preventDefault();
        $('#characterCreator').modal('show')
    });

    $("#createCharacter").on("click", function(e){
        e.preventDefault();
        var name = $("#character-name").val().trim();
        var roast = $("#skill_R").val().trim();
        var knife = $("#skill_K").val().trim();
        var grill = $("#skill_G").val().trim();
        var sauce = $("#skill_S").val().trim();
        var dough = $("#skill_D").val().trim();
        var userID = window.sessionStorage.getItem("userID");

        $.post("/api/createCharacter",{
            name: name,
            skill_R: roast,
            skill_K: knife,
            skill_G: grill,
            skill_S: sauce,
            skill_D: dough,
            UserId: userID

        }).then(function(result){
            console.log("createCharacter api call: "+result);
            window.location.reload();
        });
        

    })

   
}); //close document ready