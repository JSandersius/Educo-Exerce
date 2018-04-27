//integrated this into server.js in root file


// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
// var express = require("express");  got it 
// var bodyParser = require("body-parser"); got it 

// Sets up the Express App
// =============================================================
// var app = express(); got it 
// var PORT = process.env.PORT || 8080; got it 

// Requiring our models for syncing
// var db = require("./models");  //added this to server

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); got it
// parse application/json

// app.use(bodyParser.json()); got it 

// Static directory
// app.use(express.static("public")); got it 

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);       //////added these to server.js
// require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {       /////added this to server

//   app.listen(PORT, function() {                 got it
//     console.log("App listening on PORT " + PORT);
//   });
// });
