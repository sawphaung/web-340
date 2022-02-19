/*
============================================
Title: Mocha and Chai Example
File Name: phaung-exercise7-3.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Feb 18, 2022
===========================================
*/
var fruits = require("../phaung-fruits.js");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function(){
    it("should return an array of fruits", function(){
        var f = fruits("Apple,Orange,Mango");
        assert(Array.isArray(f));
    });
});