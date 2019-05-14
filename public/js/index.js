// Get references to page elements
var username = $("#username");
var password = $("#password");



// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
// var handleFormSubmit = function (type) {
//   // event.preventDefault();
//   console.log(type);

//   var user = {
//     username: username.val().trim(),
//     password: password.val().trim()
//   };
//   console.log(user);

//   // if (!(user.username && user.password)) {
//   //   alert("You must enter an example text and description!");
//   //   return;
//   // }

//   if (type === "log-in") {
//     API.loginUser(user).then(function () {
//       $.get("/api/users", {
//         username: username,
//         password: password
//       }).then(function (data) {
//         //do something
//       });

//     });
//   }
//   else if (type === "sign-up") {
//     $.post("/api/users", {
//       username: username,
//       password: password
//     }).then(function (data) {
//       console.log(data);
//       //go to game page

//     })
//   }

// }
// var form = $(".needs-validation");
// $(form).on("submit", function(e){
//   if(form.checkValidity() === false){
//     e.preventDefault();
//     e.stopPropagation();
//   }
//   form.addClass("was-validated");
// }, false);

function logIn(userId) {
  window.sessionStorage.setItem("userId", userId);
  window.location.replace("/character-select/" + userId);
}

function checkUser(username, password) {
  $.post("/api/login", {
    username: username,
    password: password
  }).then(function (result) {
    alert(result);
    var userId = result.id;
    logIn(userId);
  });
};
// Add event listeners to the submit and delete buttons
$("#log-in").on("click", function (e) {
  e.preventDefault();
  var username = $("#username").val().trim();
  var password = $("#password").val().trim();
  console.log("username: "+username);
  console.log("password: "+password);
  if((username==="") || (password==="")){
    console.log("here");
    return $(".needs-validation").addClass("was-validated");
  }
  // $.get("/api/users/" + username + "/" + password, function (data) {
  //   console.log("log in data " + data);
  // });

  checkUser(username, password);

  // $.post("/api/login", {
  //   username: username,
  //   password: password
  // }).then(function (result) {
  //   alert(result);
  //   var userId = result.id;
  //   logIn(userId);
    // window.sessionStorage.setItem("userId",userId); 
    // window.location.replace("/character-select/"+userId);
  // });
});


$("#sign-up").on("click", function (e) {
  e.preventDefault();
  var username = $("#username").val().trim();
  var password = $("#password").val().trim();
  // $.ajax("/api/users", {
  //   type: "POST",
  //   data: {
  //     username: $("#username").val().trim(),
  //     password: $("#password").val().trim()
  //   }
  // }).then(function (data) {
  //   console.log("the data is " + data);
  //   badUsername();
  // })

  createAccount(username, password);

});

function createAccount(){
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
  alert("That username is already taken");
}

