/*
============================================
Title: Mongoose
File Name: phaung-mongoose.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Feb 08, 2022
===========================================
*/
var express = require("express");

var http = require("http");

var logger = require("morgan");

var mongoose = require("mongoose");

// Connect DB
var mongoDB = "mongodb+srv://admin:21320740@buwebdev-cluster-1.azwcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;
var db = mongoose.connection;

// Connection Failed
db.on('error', console.error.bind(console, "Mongoose connection error."));

// Connection Successful
db.once('open', function(){
    console.log("Application connected to mLab");
});

// Express
var app = express();
// Logger
app.use(logger('dev'));

// Connection established
http.createServer(app).listen(8080, function(){
     console.log("Application started running on port 8080!");
});