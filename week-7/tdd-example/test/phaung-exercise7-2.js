/*
============================================
Title: TDD in Action
File Name: phaung-exercise7-2.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Feb 17, 2022
===========================================
*/
var assert = require("assert");
const { isTypedArray } = require("util/types");

describe("String#split", function(){
    it("should return an array of fruits", function(){
        assert(Array.isArray("Apple,Orange,Mango".split(',')));
    });
});