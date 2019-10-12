$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  $.get("/api/user_data").then(function(data) {
    // I have access of the college ID. I need to pass that ID into the API Call. Read the JSON object, and only grab what you need.
    // log in the information in the back-end. worry about the rendering process later.

    var collegeID = data.favCollegeID;
    // This will test out the users' selected college ID
    console.log(collegeID);

    $(".member-name").text(data.email);

    var queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools?id="+collegeID+"&api_key=hJeRaRgcFSddWPeyUWgfur8b6vz2DB0FTDNg0ENF";

      $.get(queryURL).then(function(collegeData){

        // This is the queryURl that will hit College Scorecard API

      // THIS HERE IS WHERE WE WANT TO HIT THE ID OF THE COLLEGE AND PULL PARTICULAR PIECES OF DATA FROM THAT ID on to here:
      /*
      a. Finance/Cost/Tuition/Scholarships
      b. SATs/ACTs
      c. Class Size/Graduation rate
      */
      // console.log(collegeData);
      // console.log used to hit particular query parameters of the api database
      // console.log(collegeData.results[0].latest.cost);
      console.log(collegeData.results[0].latest.cost.tuition.in_state);
      console.log(collegeData.results[0].latest.cost.tuition.out_of_state);
      // console.log(collegeData.results[0].latest.admissions);
      // console.log(collegeData.results[0].latest.aid);

      // $(".collegeSearchParams").append("In-State Tuition " + collegeData.results[0].latest.cost.tuition.in_state);
        // \n new line
      $(".collegeSearchParams").append(" \n <br>" + "Out-of-State Tuition " + collegeData.results[0].latest.cost.tuition.out_of_state);

      var collegeSearchResults = $("<p>").text("In-State Tuition" + collegeData.results[0].latest.cost.tuition.in_state);
      collegeSearchResults.addClass("inStateTuition");

      $(".collegeSearchParams").append(collegeSearchResults);

      });
    });

    // The next objective is to render the saved pieces of data
});








