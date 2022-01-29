/*
============================================
Title: HTTP Status Code
File Name: phaung-httpStatusCode.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Jan 29, 2021
===========================================
*/

var express = require('express');
const res = require('express/lib/response');

var http = require('http');

var app = express();

app.get("/not-found", function(request, response) {
    response.status(404);

    response.json({
        error: "404 Not Found."
    }); 
});

app.get("/ok", function(request, response){
    response.status(200);

    response.json({
        message: "Page loaded correctly."
    });
});

app.get("/not-implemented", function(request, response){
    response.status(501);

    response.json({
        error: "Internal Server Error."
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application stated on port 8080");
});