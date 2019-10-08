$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});

//  So this is where I need to create the members

module.exports = function (sequelize, DataTypes){
  var College = sequelize.define('College', {
    // assign a 'college id' but this id is a unique id that pertains to each unique user that signs up. Note that this is not the college id that pertains to being used for applying for the SATs/ACTs
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    // This is the name of the college/university column
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [20]
    },
    // University/college State column
    state: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [20]
    },
    // University's ID (For SATs/ACTs)
    collegeID: {
      type: DataTypes.STRING

    }

  });
};