// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  //Refer back if error/bugs app.post("/api/login", passport.authenticate("local"),
  app.post("/api/chooseCollege", passport.authenticate("local"), function (req, res) {
    res.json("/chooseCollege");
  });

  // This piece of code is to connect the login for the user to the welcome/home page.
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.user.create({
        email: req.body.email,
        password: req.body.password
      })
      // Redirection on successful creation of an account.
      .then(function () {
        console.log("testing");
        res.redirect(307, "/api/chooseCollege");
        //res.json("/chooseCollege")
      })
      // Recap: The catch() method returns a Promise and deals with rejected cases only.
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });


  // Route 3 (PUT): UPDATE
  // What this route does is that if the user has made a decision of their favorite/targeted college, the user will click the heart icon. Upon the click of the heart icon it will save the college's ID to MySQL and update the column. Upon
  app.put("/api/favorites/:id", function (req, res) {

    var favoriteID = parseInt(req.params.id);
    var userID = req.user.id;
    console.log({
      favoriteID,
      userID
    });

    // This function will execute once the user hits the heart button and it will save the API data and eventually the data will be routed towards the main homepage.
    db.user.update({
        favCollegeID: favoriteID
      }, {
        where: {
          id: userID
        }
      })
      // Redirection on successful creation of an account.
      .then(function (data) {
        // Now that we establish a redirection of the user this is where we will put the rest of the college information in:


        // Instate a boolean statement (true or false) if the user has set their college to be a favorite.


        console.log(data);
        res.json("/chooseCollege")
      })
      .catch(function (err) {
        res.status(401).json(err);
      });

    // Get a glimpse of the user's object.
    res.json(req.user);
  });
  // Closing curly brace for model.export = function(app)
};