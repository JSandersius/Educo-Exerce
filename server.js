
// *** Dependencies
// =============================================================
var request = require("request");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var Sequelize = require('sequelize');
var mysql2 = require('mysql2')


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Requiring our models for syncing
var db = require("./models/index.js");             //when inlcuding either of these lines, terminal reads "cannot find module sequalize"
// var models = require('./models/sequelize');   


// Static directory
app.use(express.static("public"));


// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App now listening on PORT:" + PORT);
    });
});



// ____________________


// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html


//_________________
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });


    app.get("/cms", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/cms.html"));
    });


    // blog route loads blog.html
    app.get("/blog", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

};

//_____________

// Routes
// =============================================================

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "test" }));

app.set("view engine", "handlebars");


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./home.html"));
});

app.get("/userLogin", function(req, res) {

    res.sendFile(path.join(__dirname, "./userLogin.html"));
});

app.get("/trainerLogin", function(req, res) {
    res.sendFile(path.join(__dirname, "./trainerLogin.html"));
});

app.get("/contactUs", function(req, res) {
    res.sendFile(path.join(__dirname, "./contactUs.html"));
});

app.get("/aboutUs", function(req, res) {
    res.sendFile(path.join(__dirname, "./aboutUs.html"));
});

app.get("/userSubmit", function(req, res) {
    res.sendFile(path.join(__dirname, "./userSubmit.html"));
});

app.get("/trainerSubmit", function(req, res) {
    res.sendFile(path.join(__dirname, "./trainerSubmit.html"));
});

app.use(express.static('images'));
