/*
============================================
Title: Putting it All Together
File Name: phaung-puttingAllTogether.js
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

// Notify express there is views folder in the directory
app.set('views', path.resolve(__dirname, "views")); 

// Tell exprss to use the EJS view engine
app.set("view engine", 'ejs');

app.use(logger('short'));

app.get('/', function(request, response){
    response.render('index', {
        message: "Home Page"
    });
});

app.get('/about', function(request, response){
    response.render('about', {
        message: "About Page"
    });
});

app.get('/contact', function(request, response){
    response.render('contact', {
        message: "Contact Page"
    });
});

app.get('/products', function(request, response){
    response.render('products', {
        message: "Product Page"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on the 8080 port");
});