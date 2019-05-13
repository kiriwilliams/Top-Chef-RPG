$(document).ready(function(){
    $("#newCharacter").on("click", function(e){
        e.preventDefault();
        $('#characterCreator').modal('show')
    });

    //go to home page when character is selected
    $(".selectCharacter").on("click", function(e){
        e.preventDefault();
        var charId = $(this).data("id");
        window.sessionStorage.setItem("charID", charId);
        window.location.replace("/home");
    })
   
}); //close document ready