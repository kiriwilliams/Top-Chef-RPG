$(document).ready(function(){
    var background = $("#backgroundimg");
    var options = $(".options");
    var env_id;

    //different possible on click events
    $(document).on("click", ".environmentsButtons", updateEnv);
    $(document).on("click", ".optionsButtons", optionPicked)
    
    //update environment when new one selected
    function updateEnv(event){
        event.preventDefault();
        
        $.get("/api/environment/:id")
            .then(function(data){
                $(".body").css("background-img", data.background);
                env_id = data.id;
            });
    }

    //update current page when an option is selected
    function optionPicked(event){
        event.preventDefault();


    }
});