
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




