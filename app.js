var express = require("express");
var mongoose = require("mongoose");
var app = express();


// APP CONFIG
mongoose.connect("mongodb://localhost/portfolio", { useNewUrlParser: true });
app.set("view engine", "ejs"); // don't have to put ejs extension after file name.
app.use(express.static("public"));


// HOME PAGE
app.get("/", function(req, res) {
	res.render("index");
});

// render ABOUT ME page
app.get("/aboutme", function(req, res) {
	res.render("aboutme");
});

// render PROJECTS page
app.get("/projects", function(req, res) {
	res.render("projects");
});

// render RESUME page
app.get("/resume", function(req, res) {
	res.render("resume");
});

// render CONTACT page
app.get("/contact", function(req, res) {
	res.render("contact");
})

// SERVER LISTENING
app.listen(3000, function() {
	console.log("Server is starting on port 3000...");
});