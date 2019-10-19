// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // These are the main pieces of data retrieved from College Scorecard that will be associated with that particular user. These data components will be saved and be rendered onto the members page, once the user clicks the heart-icon of their selected college/university.
    favCollegeID: {
      type: DataTypes.INTEGER
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  user.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  user.associate = function (models) {
    // We're saying that a Post should belong to a *college/user?
    // A Post can't be created without an college due to the foreign key constraint
    user.hasMany(models.college, {
        onDelete: "cascade"
      });
};
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  user.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return user;
};
