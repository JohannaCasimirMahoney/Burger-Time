// Setup the Dependencies and Router` for the app, and export the `router` at the end of your file.

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

// Static for the app from the "public" directory in app directory
app.use(express.static("public"));

// Parse appliction body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
