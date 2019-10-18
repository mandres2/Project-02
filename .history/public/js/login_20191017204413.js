$(document).ready(function() {
  $('.loginContainer').fadeIn("slow");
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
	// TODO: you should probably have some sort of alert here so the user knows what the error is
	  return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/auth/login", {
      email: email,
      password: password
    })
      .then(function(data) {
        console.log(data)
		// If there's an error, log the error
		window.location("/chooseCollege");
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
