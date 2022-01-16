/*
============================================
Title: ESJ Views
File Name: phaung-assignment-2.4.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Jan 15, 2021
===========================================
*/
var express = require("express");

var http = require("http");

var app = express();

var path = require("path");

app.set("views", path.resolve(__dirname, "views"));

app.set ("view engine", "ejs");

app.get("/", function(request, response){
    response.render("index", {
        firstName: "John",
        lastName: "Smith",
        address: "123 Main Street Milwaukee, WI"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on 8080.");
});


