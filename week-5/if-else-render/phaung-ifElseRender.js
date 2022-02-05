/*
============================================
Title: EJS - IF Else Render
File Name: phaung-ifElseRender.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Feb 04, 2021
===========================================
*/
var express = require('express');
var http = require('http');
var path = require('path');


var app = express();
app.set("views", path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

var name = [
    "John",
    "Petar",
    "Nate",
    "Paul"
];

app.get('/', function(request, response){
    response.render("index", {
        names: name
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});