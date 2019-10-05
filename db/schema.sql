-- To summarize there is going to be 4 tables under one database which is called collegeapp_db

DROP DATABASE IF EXISTS collegeapp_db;
CREATE DATABASE collegeapp_db;

-- Table 1 - This is for User authentication AND setting this up with Table 3 CollegeFavorites + Table 4 To-Do
CREATE TABLE users (
id INT(11) NOT NULL AUTO_INCREMENT,
email VARCHAR(255),
password VARCHAR(255),
createdAt datetime,
updatedAt datetime
PRIMARY KEY (id)
collegeid()
);

-- Table 2 - Colleges
CREATE TABLE colleges (
id


PRIMARY KEY (collegeid)
);

-- Table 3 - User's Selected Colleges
CREATE TABLE userFavColleges(

);





-- ***Table 4 - User's Todo