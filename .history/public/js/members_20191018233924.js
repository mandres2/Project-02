// $(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  $.get("/api/user_data").then(function(data) {
    // console.log("USER DATA members.js:", data);
    // I have access of the college ID. I need to pass that ID into the API Call. Read the JSON object, and only grab what you need.
    // log in the information in the back-end. worry about the rendering process later.

    var collegeID = data.favCollegeID;
    // This will test out the users' selected college ID
    // console.log(collegeID);

    $(".member-name").text(data.email);
    // return collegeID;
  // }).then(function(collegeDataId) {
    var queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools?id="+collegeID+"&api_key=hJeRaRgcFSddWPeyUWgfur8b6vz2DB0FTDNg0ENF";

      $.get(queryURL).then(function(collegeData){
        console.log("college data: ", collegeData)
      // This is the queryURl that will hit College Scorecard API

      // School's name that will be appended to the Welcome Page
      var uniName = $("<p>").text(collegeData.results[0].school.alias);
      uniName.addClass("uniNameTitle");
      $(".display-2").append(uniName);

      // ================================= College Finances ================================= //
      //UNIVERSITY FINANCIAL DATA TITLE:
      $(".collegeSearchParams").append("\n <br> <b>" + "UNIVERSITY FINANCIAL DATA");
      // Cost for an academic year:
      $(".collegeSearchParams").append("\n <br>" + "Cost of Attendance (Academic Year):  $" + "<b>" + collegeData.results[0].latest.cost.attendance.academic_year);
      // Average Net Price Overall:
      $(".collegeSearchParams").append("\n <br>" + "Average Net Price (Overall):  $" + "<b>" + collegeData.results[0].latest.cost.avg_net_price.overall);
      // Out-of-State Tuition:
      $(".collegeSearchParams").append(" \n <br>" + "Out-of-State Tuition:  $" + "<b>" + collegeData.results[0].latest.cost.tuition.out_of_state);

      // In-State Tuition:
      $(".collegeSearchParams").append(" \n <br>" + "In-State Tuition:  $" + "<b>" + collegeData.results[0].latest.cost.tuition.in_state);


      /* This is an alternative to append a query parameter:
      var collegeSearchResults = $("<p>").text("In-State Tuition:  $" + collegeData.results[0].latest.cost.tuition.in_state);
      // Note: this class can be used to modify the font
      collegeSearchResults.addClass("inStateTuition");
      $(".collegeSearchParams").append(collegeSearchResults);
        */


      $(".collegeSearchParams").append("\n <br>");


      // ================================= College Admissions ================================= //
      //COLLEGE/UNIVERSITY ADMISSIONS TITLE:
      $(".collegeSearchParams").append("\n <br> <b>" + "COLLEGE/UNIVERSITY ADMISSIONS");
      // school ID:
      $(".collegeSearchParams").append("\n <br>" + "University ID :  " + "<b>" + collegeData.results[0].id);
      // Admission Rate:
      var originalValue = [collegeData.results[0].latest.admissions.admission_rate.overall];
      var convertValue = originalValue.map(function(item) {
      return ((item) * 100) + '%';
      });
      $(".collegeSearchParams").append("\n <br>" + "Overall Admission Rate :  " + "<b>" + convertValue);

      $(".collegeSearchParams").append("\n <br>");
      // SATs Scores 25th Percentile:
      $(".collegeSearchParams").append("\n <br> " + "SAT SCORES 25TH PERCENTILE:");
      $(".collegeSearchParams").append("\n <br>" + "Critical Reading:  " + "<b>" + collegeData.results[0].latest.admissions.sat_scores["25th_percentile"].critical_reading);
      $(".collegeSearchParams").append("\n <br>" + "Math:  " + "<b>" + collegeData.results[0].latest.admissions.sat_scores["25th_percentile"].math);
      $(".collegeSearchParams").append("\n <br>" + "Reading:  " + "<b>" + collegeData.results[0].latest.admissions.sat_scores["25th_percentile"].writing);

      $(".collegeSearchParams").append("\n <br>");
      // SATs Scores 75th Percentile:
      $(".collegeSearchParams").append("\n <br> " + "SAT SCORES 75TH PERCENTILE:");
      $(".collegeSearchParams").append("\n <br>" + "Critical Reading:  " + "<b>" + collegeData.results[0].latest.admissions.sat_scores["75th_percentile"].critical_reading);
      $(".collegeSearchParams").append("\n <br>" + "Math:  " + "<b>" + collegeData.results[0].latest.admissions.sat_scores["75th_percentile"].math);
      $(".collegeSearchParams").append("\n <br>" + "Reading:  " + "<b>" + collegeData.results[0].latest.admissions.sat_scores["75th_percentile"].writing);

      $(".collegeSearchParams").append("\n <br>");
      // SAT Overall Average Score:
      $(".collegeSearchParams").append("\n <br>" + "SAT Overall Average Score:  " + "<b>" + collegeData.results[0].latest.admissions.sat_scores.average.overall);

      $(".collegeSearchParams").append("\n <br>");

      // ACTs Scores:
      $(".collegeSearchParams").append("\n <br> " + "ACT SCORES 25TH PERCENTILE:");
      $(".collegeSearchParams").append("\n <br>" + "Cumulative:  " + "<b>" + collegeData.results[0].latest.admissions.act_scores["25th_percentile"].cumulative);
      $(".collegeSearchParams").append("\n <br>" + "English:  " + "<b>" + collegeData.results[0].latest.admissions.act_scores["25th_percentile"].english);
      $(".collegeSearchParams").append("\n <br>" + "Math:  " + "<b>" + collegeData.results[0].latest.admissions.act_scores["25th_percentile"].math);
      $(".collegeSearchParams").append("\n <br>" + "Writing:  " + "<b>" + collegeData.results[0].latest.admissions.act_scores["25th_percentile"].writing);

      $(".collegeSearchParams").append("\n <br>");

      $(".collegeSearchParams").append("\n <br> " + "ACT SCORES 75TH PERCENTILE:");
      $(".collegeSearchParams").append("\n <br>" + "Cumulative:  " + "<b>" + collegeData.results[0].latest.admissions.act_scores["75th_percentile"].cumulative);
      $(".collegeSearchParams").append("\n <br>" + "English:  " + "<b>" + collegeData.results[0].latest.admissions.act_scores["75th_percentile"].english);
      $(".collegeSearchParams").append("\n <br>" + "Math:  " + "<b>" + collegeData.results[0].latest.admissions.act_scores["75th_percentile"].math);
      $(".collegeSearchParams").append("\n <br>" + "Writing:  " + "<b>" + collegeData.results[0].latest.admissions.act_scores["75th_percentile"].writing);

      $(".collegeSearchParams").append("\n <br>");
      // ACT Midpoint:
      $(".collegeSearchParams").append("\n <br> " + "ACT MIDPOINT:");
      $(".collegeSearchParams").append("\n <br>" + "Cumulative:  " + "<b>" + collegeData.results[0].latest.admissions.act_scores.midpoint.cumulative);
      $(".collegeSearchParams").append("\n <br>" + "English:  " + "<b>" + collegeData.results[0].latest.admissions.act_scores.midpoint.english);
      $(".collegeSearchParams").append("\n <br>" + "Math:  " + "<b>" + collegeData.results[0].latest.admissions.act_scores.midpoint.math);
      $(".collegeSearchParams").append("\n <br>" + "Writing:  " + "<b>" + collegeData.results[0].latest.admissions.act_scores.midpoint.writing);


      $(".collegeSearchParams").append("\n <br>");

      });

    });
// });

    // The next objective is to render the saved pieces of data








