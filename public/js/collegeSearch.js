// This is the file that is designated to hit the Collegescore Card API Database

function buildQueryURL() {
    // queryURL is the url we'll use to query the API
    // var queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=hJeRaRgcFSddWPeyUWgfur8b6vz2DB0FTDNg0ENF?";
    // var queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=hJeRaRgcFSddWPeyUWgfur8b6vz2DB0FTDNg0ENF?";

    var queryURL ="https://api.data.gov/ed/collegescorecard/v1/schools?api_key=hJeRaRgcFSddWPeyUWgfur8b6vz2DB0FTDNg0ENF&school.name="+$("#search-term")
    .val()
    .trim();


    // "https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=hJeRaRgcFSddWPeyUWgfur8b6vz2DB0FTDNg0ENF&school.degrees_awarded.predominant=2,3&_fields=id,school.name,2013.student.size";

    // "https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=hJeRaRgcFSddWPeyUWgfur8b6vz2DB0FTDNg0ENF?q=University%20of%20Washington";

    // Begin building an object to contain our API call's query parameters
    // Set the API key
    var queryParams = {

    };


    // Grab text the user typed into the search input, add to the queryParams object
    queryParams["school.name"] = $("#search-term")
        .val()
        .trim();

    // Logging the URL so we have access to it for troubleshooting
    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams);

}

function updatePage(collegeData) {
    // Get from the form the number of results to display
    // API doesn't have a "limit" parameter, so we have to do this ourselves
    var numColleges = $("#college-count").val();

    // Log the College to console, where it will show up as an object
    console.log(collegeData);
    console.log("------------------------------------");

    // Loop through and build elements for the defined number of articles
    for (var i = 0; i < numColleges; i++) {
        // Get specific article info for current index
        var college = collegeData.response.docs[i];

        // Increase the articleCount (track article # - starting at 1)
        var collegeCount = i + 1;

        // Create the  list group to contain the articles and add the article content for each
        var $collegeList = $("<ul>");
        $collegeList.addClass("list-group");

        // Add the newly created element to the DOM
        $("#college-section").append($collegeList);

        // If the article has a headline, log and append to $articleList
        var headline = college.headline;
        var $collegeListItem = $("<li class='list-group-item collegeHeadline'>");

        if (headline && headline.main) {
            console.log(headline.main);
            $collegeListItem.append(
                "<span class='label label-primary'>" +
                collegeCount +
                "</span>" +
                "<strong> " +
                headline.main +
                "</strong>"
            );
        }

        // Log section, and append to document if exists
        var section = college.section_name;
        console.log(college.section_name);
        if (section) {
            $collegeListItem.append("<h5>Section: " + section + "</h5>");
        }

        // Append and log url
        $collegeListItem.append("<a href='" + college.web_url + "'>" + college.web_url + "</a>");
        console.log(college.web_url);

        // Append the article
        $articleList.append($collegeListItem);
    }
}

// Function to empty out the articles
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

    // Empty the region associated with the articles
    clear();

    // Build the query URL for the ajax request to the NYT API
    var queryURL = buildQueryURL();

    // Make the AJAX request to the API - GETs the JSON data at the queryURL.
    // The data then gets passed as an argument to the updatePage function
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(updatePage);
});

//  .on("click") function associated with the clear button
$("#clear-all").on("click", clear);