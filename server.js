// Dependencies
var express = require("express");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Static directory to be served
app.use(express.static("app/public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger-controller.js");

app.use(routes);

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
  console.log("Server listening on: http://localhost:" + PORT);
});
