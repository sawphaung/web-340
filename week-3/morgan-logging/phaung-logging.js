/*
============================================
Title: Morgan Logging
File Name: phaung-logging.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Jan 22, 2021
===========================================
*/

var express = require('express');

var http = require('http');

var path = require('path');

var logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, "views")); // Notify express there is views folder in the directory

app.set("view engine", 'ejs'); // Tell exprss to use the EJS view engine

app.use(logger('short'));

app.get('/', function (request, response) {
    response.render("index", {
        message: "Hello World! Welcome to the Morgan Logger Example!"
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Application started on 8080's port");
})
