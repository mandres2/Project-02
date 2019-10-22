// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  //Refer back if error/bugs app.post("/api/login", passport.authenticate("local"),


  // app.post("/api/chooseCollege", passport.authenticate("local"), function (req, res) {
  //   res.json("/chooseCollege");
  // });

  // This piece of code is to connect the login for the user to the welcome/home page.

  // TODO: you need to separate your auth stuff into a separate file

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.Users.create({
        email: req.body.email,
        password: req.body.password
      })
      // Redirection to login on successful creation of an account.
      .then(function (result) {
        res.redirect(307, "/api/login");
      })
      // Recap: The catch() method returns a Promise and deals with rejected cases only.
      .catch(function (err) {
        if (err) throw err;
        // res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {

      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json(req.user);
  });

  // Route 3 (PUT): UPDATE
  // What this route does is that if the user has made a decision of their favorite/targeted college, the user will click the heart icon. Upon the click of the heart icon it will save the college's ID to MySQL and update the column. Upon
  app.put("/api/user_data", function (req, res) {
    // console.log('/api/favorites/:id triggered');
    // console.log("put api user data req.body", req.body.favCollegeID);
    // console.log("put api user data req.user.id", req.user.id);
    var favoriteID = parseInt(req.body.favCollegeID);
    var userID = req.user.id;

    // This function will execute once the user hits the heart button and it will save the API data and eventually the data will be routed towards the member homepage.
    db.Users.update({
      favCollegeID: favoriteID
      }, {
        where: {
          id: userID
        }

      })
      // Redirection on selecting college.
      .then(function (data) {
        // console.log("updated data backend", data);
        res.json(data);
        // res.redirect("/members");
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  // Closing curly brace for model.export = function(app)
};