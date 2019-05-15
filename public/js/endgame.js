$(document).on("click", "#return-btn", function(e) {
    e.preventDefault();

    var userId = window.sessionStorage.getItem("userId");
    window.location.replace("/character-select/" + userId)
})