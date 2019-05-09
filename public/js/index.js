// Get references to page elements
var username = $("#username");
var password = $("#password");

// The API object contains methods for each kind of request we'll make
var API = {
  loginUser: function(user) {
    console.log(user)
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(user)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};



// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(type) {
  // event.preventDefault();
  console.log(type);

  var user = {
    username: username.val().trim(),
    password: password.val().trim()
  };
  console.log(user);

  // if (!(user.username && user.password)) {
  //   alert("You must enter an example text and description!");
  //   return;
  // }

  if(type === "log"){
    API.loginUser(user).then(function() {
      $.get("/api/users", { 
        username: username,
        password: password
      }).then(function(data){
        //do something
      });
    
    });
  }
  else if (type === "sign"){
  $.post("/api/users", {
    username: username,
    password: password
  }).then(function(data){
    console.log(data);
    //go to game page
  })
  }

}

// Add event listeners to the submit and delete buttons
$("#log-in").on("click", function(e){
  e.preventDefault();
  handleFormSubmit("log-in");


});

$("#sign-up").on("click", function(e){
  e.preventDefault();
  handleFormSubmit("sign-up");

})

