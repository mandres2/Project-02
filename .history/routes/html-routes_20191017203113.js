// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get('/', function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    } else {
      res.redirect("/login");
    }
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

// Routing to chooseCollege.html
  app.get("/chooseCollege", function(req, res) {
    // If this is the first time the user signs up redirect them to the chooseCollege page
    if (!req.user) {
    res.redirect("/login");
    }
    // console.log("chooseCollege");
    res.sendFile(path.join(__dirname, "../public/chooseCollege.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    console.log('REQ.USER: ', req.user)
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/about", function(req, res) {
    console.log('REQ.USER: ', req.user)
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });





};


