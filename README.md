# Project-02 "college.leap"

# college.leap

![alt text](https://cdn.dribbble.com/users/1177948/screenshots/4338165/campfire.gif)

<h3>What does it do?</h3>

college.leap was programmed to help alleviate the stress of a highschool student as they begin their preparation and transition to a college setting. Think of this page as a campfire site in a Role Playing Game where the player, (AKA 'the student') can pause, rest/save their "game" as they continue their "journey" to college. The resources from this app provides all the tools for the user to prepare for their exams as well as giving students preparation for their application essays and interviews.

## Motive:
As a Full Stack Developer, the primary motive was to build an application by utilizing an ORM methodology and establishing a MVC framework. Exerting these types of practices provides an organized/clean environment and allows other developers to maneuver around the code with ease.

## Getting Started

<b>To get started:</b>
<br>
:black_small_square: You will need to have an updated IDE (preferably VS Code), and the latest version of Node.js, and an up-to-date version of Express, and Heroku.

### Prerequisites

:black_small_square: IDE: Microsoft Visual Studios 1.37.1 (or higher).
<br>
:black_small_square: Node.js (Version: 12.9.0 or higher)
<br>
:black_small_square: Express - Web application framework designed for building web applications and APIs.
<br>
:black_small_square: Heroku - Container-based cloud Platform as a Service (PaaS). Heroku enables developers to build, run, and operate applications entirely in the cloud.
<br>
:black_small_square: MySQL - Open-source relational database management system.
<br>
:black_small_square: JawsDB MySQL - free Heroku add-on application that gives access to a fully-functional MySQL database with no barriers or hoops to jump through.
:black_small_square: Sequelize - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.


## Code Explanation:
* The way the code was written out was utilizing ORM (Object-Relational Mapping), while establishing an MVC (Model-View-Controller) framework.
  1. 'server.js' that contains the npm packages for express, body-parser, and path. The server.js sets up the app(instance of express) as well as setting up handlebars, and import the routes.
  2. The 'db' folder contains the MySQL data which is primarily... x
  3. The 'public' folder contains primarily the front-end code. It also contains the CSS styling for the web page as well. The folder contains the images/screenshots used in the application.
  4. The 'views' folder contains all of Handlebar's code.
  5. 'controllers' folder contains has the update function
  6. 'config' folder contains the connections and orm model for the application.


## How To Use The Application:

<h2>college.leap signup</h2>

![alt text](https://github.com/mandres2/Project-02/blob/master/public/assets/img/college.leap_signup.gif?raw=true)

<br>

<h2>college.leap sign-in tour</h2>

![alt text](https://github.com/mandres2/Project-02/blob/master/public/assets/img/college.leap%20login_tour.gif?raw=true)


## Deployment

* <b> 'git push origin master' & 'git push heroku master' the files into GitHub Profile and Heroku respectively.</b>
* <b> Link repository and Heroku deployment link to BCS.</b>

## Built With

<br>
:black_small_square: Microsoft Studios Visual Code (v1.37.1)
<br>
:black_small_square: Express - Web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs
<br>
:black_small_square: MySQL - Open-source relational database management system
<br>
:black_small_square: Google Chrome v77.0.3865.90(Windows)
<br>
:black_small_square: Node.js v12.9.0
<br>
:black_small_square: ShareX v12.4.1 - Screen Record User Functionality and converts to GIFs
<br>
:black_small_square: Adobe XD - Created wireframe for HTML layout.
<br>
:black_small_square: Adobe After-Effects - Edit GIfs

## npm Packages Used:

:black_small_square: mysql v2.17.1
<br>
:black_small_square: express-handlebars v3.1.0
<br>
:black_small_square: body-parser v1.19.0 - Node path middleware.
<br>
:black_small_square: path v0.12.7 - NodeJS 'path' module
<br>
:black_small_square: sequelize

## Author

**Micah Andres** - [mandres2](https://github.com/mandres2)

## License

<b>This project is licensed under the MIT License</b>

## Acknowledgments & Support
* <b>TAs</b> - Catherine Pham, Benjamin Vaagen

<br>

* <b>Tutors</b> - Denis Molloy, Trae Shanks, Matthew Tedder, Robert Hardin

<br>

* <b>Teacher</b> - Arron Linton

<br>

* <b>University of Washington</b> for providing study rooms.

## Progress Log:
<br>

:heavy_check_mark: 9.30 - Reviewed requirements. Obtain project proposal approval from staff. Established repository, files/folders, and began markdown on README.md.
:heavy_check_mark: 10.01-10.03 - Began researching extra APIs, as well as working on establishing data-base structures, revised markdown.
<br>
:heavy_check_mark: 10.04 - Set-up and fix MySQL Databases & API routes.
<br>
:heavy_check_mark: 10.05 - Fix the authentication from signup to college search. Adjusted API routes.
<br>
:heavy_check_mark: 10.06 - Conducted research on CollegeScorecard API and look for data parameters to use as well as establishing hitting the API database, bringing back the data and rendering them into HTML elements.
<br>
:heavy_check_mark: 10.07 - Debugging and fixing API data. Store the data to that particular user and begin working on pathing it to the members homepage.
<br>
:heavy_check_mark: 10.08 - Fix the API data that will be saved for each user and set up api/html route to members page.
<br>
:heavy_check_mark: 10.09 - Fixing the Sequelize syntax and API data associated with. Attempting to route college search to members page.
<br>
:heavy_check_mark: 10.10 - Fixing the API route from College Search to Members Page.
<br>
:heavy_check_mark: 10.11 - Establishing hitting the API data base by hitting the College ID and pulling up the information of college data onto the console then render it onto the HTML page. Upload project to Heroku.
<br>
:heavy_check_mark: 10.12 - Debugging uploading project to Heroku. There were issues with the HTTP_Proxy pathing and had to conduct calibrations prior to Heroku deployment. Established hitting the College Scorecard API again for particular member's saved college's ID (i.e. Out-of-state tuition, in-state tuition).
<br>
:heavy_check_mark: 10.13 - Transitioning to Front-end work and fixing up the members page and adjusting resources page.
<br>
:heavy_check_mark: 10.14 - Appending College Data to Members Page. Deployed Application to Heroku.
<br>
:heavy_check_mark: 10.15 - Adding Resources. Working on Front-end content.
<br>
:heavy_check_mark: 10.16 - Adding Resources. Working on Front-end polishing app.
<br>
:heavy_check_mark: 10.17 - Start Powerpoint.
<br>
:heavy_check_mark: 10.18 - Polishing Application. Work on Powerpoint.
<br>
:heavy_check_mark: 10.19 - Deploying Final Application