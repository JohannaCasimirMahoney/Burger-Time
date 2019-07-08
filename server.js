// Setup the Dependencies and Router` for the app, and export the `router` at the end of your file.
var express = require("express");

var PORT = process.env.PORT || 8080;
var app = express();

// Static for the app from the "public" directory in app directory
app.use(express.static("public"));

// Parse appliction body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function() {
     // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});


