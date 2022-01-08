/*
============================================
Title: Node JS Server Example
File Name: phaung-assignment-1.5.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Jan 08, 2021
===========================================
*/
var http = require("http");
function processRequest(req, res) {

    var body = "Welcome to Node.Js Course!";

    var contentLength = body.length;

    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });

    res.end(body);

}

var s = http.createServer(processRequest);
s.listen(8080);

