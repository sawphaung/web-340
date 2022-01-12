/*
============================================
Title: Hello World with Express
File Name: phaung-exercise-2.2.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Jan 11, 2021
===========================================
*/

var express = require('express');
var http = require('http');

var app = express();

app.use(function(req, res){
    console.log('In comes a reqest to: %s', req.url);

    res.end("hello world\n");
});

// Start the server - 8080
http.createServer(app).listen(8080, function(){
    console.log('Application started on port %s', 8080);
});