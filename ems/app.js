/*
============================================
Title: User Interface Development
File Name: app.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Feb 06, 2022
===========================================
*/
var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var helmet = require("helmet"); // Library for XSS attacks

var app = express();

// Mongoose Connection
var mongoose = require("mongoose");

var Employee = require('./models/employee');

// database connection string to MongoDB Atlas
const mongoDB = "mongodb+srv://admin:5yBXoiUxHw7MA8Mh@buwebdev-cluster-1.azwcv.mongodb.net/ems";

// DB Connection
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;
var db = mongoose.connection;
// Error
db.on("error", console.error.bind(console,"MongoDB connection error!"));
// success
db.once("open", function(){
    console.log("Application connected to mLab MongoDB instance");
})


app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.use(helmet.xssFilter());

// Get Images
app.use(express.static('public')); 
app.use('/images', express.static('images'));

app.use('/css',express.static('css'));

app.get("/", function(request, response) {
    response.render("index", {
        title: "Home Page"
    });
});

app.get("/new", function(request, response) {
    response.render("index", {
        title: "Data Entry Page"
    });
});

app.get("/list", function(request, response) {
    response.render("index", {
        title: "Employee Records"
    });
});

app.get("/view", function(request, response) {
    response.render("index", {
        title: "View Employee Records"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});