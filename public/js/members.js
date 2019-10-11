$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});


// THIS HERE IS WHERE WE WANT TO HIT THE ID OF THE COLLEGE AND PULL PARTICULAR PIECES OF DATA FROM THAT ID on to here:
/*
a. Finance/Cost/Tuition/Scholarships
b. SATs/ACTs
c. Class Size/Graduation rate
*/


// This is an example code Arron and I went over of how to pull the entire database of a particular college, which in this case, the college selected was: UW Seattle
// https://api.data.gov/ed/collegescorecard/v1/schools?id=236948&api_key=hJeRaRgcFSddWPeyUWgfur8b6vz2DB0FTDNg0ENF



//  So this is where I need to create the members
