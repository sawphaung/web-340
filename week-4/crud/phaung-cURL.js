/*
============================================
Title: Created CURL requests to an API
File Name: phaung-cURL.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Jan 29, 2021
Description: Demonstrates CRUD operations in a Node.js API.
===========================================
*/


var express = require('express');

var http = require('http');

var app = express();

app.get("/", function(req, res) { // Get request
  res.send("API invoked as an HTTP GET request.");
});

app.put("/", function(req, res) { // Put request
  res.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(req, res) { // Post request
  res.send("API invoked as an HTTP POST request");
});

app.delete("/", function(req, res) { // Delete request
  res.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080");
})