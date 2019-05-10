$(document).ready(function(){
    $("#newCharacter").on("click", function(e){
        e.preventDefault();
        $('#characterCreator').modal('show')
    });

   
}); //close document ready