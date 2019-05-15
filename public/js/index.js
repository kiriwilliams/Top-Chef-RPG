// Get references to page elements
var username = $("#username");
var password = $("#password");



function logIn(userId) {
  window.sessionStorage.setItem("userId", userId);
  window.location.replace("/character-select/" + userId);
}

function checkUser(username, password) {
  $.post("/api/login", {
    username: username,
    password: password
  }).then(function (result) {
    if(typeof result === "string"){
      console.log("string");
      console.log("result: "+result);
      if (result === "badName"){
        console.log("here");
        return $("#usernameFeedback").attr("aria-hidden","false").removeAttr("hidden").text("Username does not exist");
      }
      else if (result === "badPass"){
        return $("#passwordFeedback").attr("aria-hidden","false").removeAttr("hidden").text("Username and password do not match");
      }
    }
    var userId = result.id;
    logIn(userId);
  });
};
// Add event listeners to the submit and delete buttons
$("#log-in").on("click", function (e) {
  $("#usernameFeedback").attr("hidden","hidden").attr("aria-hidden","true");
  $("#passwordFeedback").attr("hidden","hidden").attr("aria-hidden","true");
  e.preventDefault();
  var username = $("#username").val().trim();
  var password = $("#password").val().trim();

  if((username==="") || (password==="")){
    if(username===""){
      $("#usernameFeedback").attr("aria-hidden","false").removeAttr("hidden");
    }
    if(password===""){
      $("#passwordFeedback").attr("aria-hidden","false").removeAttr("hidden");
    }
    return;
  }

  checkUser(username, password);

});


$("#sign-up-submit").on("click", function (e) {
  $("#SUusernameFeedback").attr("hidden","hidden");
  $("#SUpasswordFeedback").attr("hidden","hidden");
  e.preventDefault();
  var username = $("#SUusername").val().trim();
  var password = $("#SUpassword").val().trim();

  if((username==="") || (password==="")){
    if(username===""){
      $("#SUusernameFeedback").attr("aria-hidden","false").removeAttr("hidden");
    }
    if(password===""){
      $("#SUpasswordFeedback").attr("aria-hidden","false").removeAttr("hidden");
    }
    return;
  }

  createAccount(username, password);

});

function createAccount(username, password){
  $.post("/api/users", {
    username: username,
    password: password
  }).then(function (result) {
    console.log("the data is " + result);
    if (!result) {
      return badUsername();
    }
    logIn(username, password);
  });
}

//adds styling to show user they need to pick a new username
function badUsername() {
  return $("#SUusernameFeedback").attr("aria-hidden","false").removeAttr("hidden").text("Username is already in use");
}

