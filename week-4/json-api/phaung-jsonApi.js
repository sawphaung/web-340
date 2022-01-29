/*
============================================
Title: JSON API
File Name: phaung-jsonApi.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Jan 29, 2021
===========================================
*/
var express = require('express');

var http = require('http');

var app = express();

app.get("/customer/:id", function (request, response) {
    
    var id = parseInt(request.params.id, 10);

    response.json({
        id: id,
        name: "Apple",
        type: "Fruits"
    }); 
});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080");
})