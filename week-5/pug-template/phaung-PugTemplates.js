/*
============================================
Title: Pug Template
File Name: phaung-PugTemplates.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Feb 05, 2022
===========================================
*/
var express = require("express");

var http = require("http");

var pug = require("pug");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function(request, response){
    response.render("index", {
        message: "Welcome to homepage based on Pug Exercise!"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started running on port 8080!");
})






