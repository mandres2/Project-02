/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for College Scorecard API based on form inputs
 */
// This is the file that is designated to hit the CollegeScore Card API Database

function buildQueryURL() {
    // queryURL is the url we'll use to query the API
    var queryURL ="https://api.data.gov/ed/collegescorecard/v1/schools?api_key=hJeRaRgcFSddWPeyUWgfur8b6vz2DB0FTDNg0ENF&_fields=id,school.name,school.state,school.school_url&school.name="+$("#search-term").val().trim();

// ====================================================================================================================================== //
// TESTING API URL SEARCH PARAMETER NOTES:
//This line will list the universities the user searched that is provided with the school's id and name: In this example, University of Washington is used -->
// https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=hJeRaRgcFSddWPeyUWgfur8b6vz2DB0FTDNg0ENF&school.name=University%20of%20Washington&_fields=id,school.name

// https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=hJeRaRgcFSddWPeyUWgfur8b6vz2DB0FTDNg0ENF&school.name=NAME%20of%20SCHOOL&_fields=id,school.name

// Refer back to Developer's API Documentation and dictionary of the: dev-category and the developer-friendly-name
// ====================================================================================================================================== //

    // Begin building an object to contain our API call's query parameters
    // Set the API key
    var queryParams = {"api-key": "hJeRaRgcFSddWPeyUWgfur8b6vz2DB0FTDNg0ENF"};


    // Grab text the user typed into the search input, add to the queryParams object
    queryParams["school.name"] = $("#search-term")
        .val()
        .trim();

    // Logging the URL so we have access to it for troubleshooting
    // console.log("---------------\nURL: " + queryURL + "\n---------------");
    // console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams);
}

/**
 * takes API data (JSON/object) and turns it into elements on the page
 *
 */

function updatePage(collegeData) {

    // Loop through and build elements for the defined number of colleges
    for (var i = 0; i < collegeData.results.length; i++) {
        // Get specific college info for current index

        // var college = collegeData.results[i];

        // Create the list group to contain the colleges and add the college content for each
        var $collegeList = $("<ul>");
        $collegeList.addClass("list-group");

        // This is the college search parameters that will append to $collegeList

        // University's ID
        // var collegeID = college.id;
        // // Testing variable to see if the data from the object
        // console.log(collegeID);

        // // University's Name
        // var collegeName = college["school.name"];
        // console.log(collegeName);

        // // University's URL
        // var collegeURL = college["school.school_url"];
        // console.log(collegeURL);

        var $collegeListItem = $("<li class='list-group-item collegeGroups'>");

        $collegeListItem.append(`<p>${collegeData.results[i].id}</p>`);
        // This is where the heart icon is placed and this will activate the api-route function as well as saving the user data.
        $collegeListItem.append(`<i data-favID = ${collegeData.results[i].id} class="favorite fa fa-heart"></i>`);
        $collegeListItem.append(`<p>${collegeData.results[i]["school.name"]}</p>`);
        $collegeListItem.append(`<p>${collegeData.results[i]["school.state"]}</p>`);
        $collegeListItem.append(`<p>${collegeData.results[i]["school.school_url"]}</p>`);
        $collegeList.append($collegeListItem);
        // Add the newly created element to the DOM
        $("#college-section").append($collegeList);
        }
    }


    // This on-click function saves the user's id info when they click the heart icon and will transfer the user to the members page.
    $(document).on("click", ".favorite", function() {
        var favID = $(this).attr("data-favID");
        // console.log("fave:", favID);

        //=============== PUT Request Placed here: ====================//
        $.ajax({
            url: "/api/user_data",
            type: "PUT",
            data: {favCollegeID: favID}
        }).then(function(addData) {
            // console.log(addData);
            location.href = "/members";
            // window.location("/members");
            // console.log('addData', addData);
        });
    });

// Function to empty out the college
function clear() {
    $("#college-section").empty();
}

// CLICK HANDLERS
// ==========================================================

// .on("click") function associated with the Search Button
$("#run-search").on("click", function (event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();

    // Empty the region associated with the colleges
    clear();

    // Build the query URL for the ajax request to the API
    var queryURL = buildQueryURL();

     // Make the AJAX request to the API - GETs the JSON data at the queryURL.
     // The data then gets passed as an argument to the updatePage function
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response){
        updatePage(response);
    });
});

// .on("click") function associated with the clear button
$("#clear-all").on("click", clear);