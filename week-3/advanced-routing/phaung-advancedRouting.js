/*
============================================
Title: Advanced Logging
File Name: phaung-advancedRouting.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Jan 23, 2021
===========================================
*/
var express = require('express');

var http = require('http');

var path = require('path');

var logger = require('morgan');

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Notify express there is views folder in the directory

app.set("view engine", "ejs");  // Tell exprss to use the EJS view engine

app.use(logger("short"));

app.get("/:productId", function(request, response) {
    var productId = parseInt(request.params.productId, 10);

    response.render("index", {
        productId: productId
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Applicationstarted on port 8080");
});
