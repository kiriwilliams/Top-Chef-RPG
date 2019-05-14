$(document).on("click", "#return-btn", function(e) {
    e.preventDefault();

    var userID = window.sessionStorage.getItem("userID");
    window.location.replace("/character-select/" + userID)
})