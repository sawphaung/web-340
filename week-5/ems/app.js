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

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

// Get Images
app.use(express.static('public')); 
app.use('/images', express.static('images'));

app.use('/css',express.static('css'));

app.get("/", function(request, response) {
    response.render("index", {
        title: "Home Page"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});