/*
============================================
File Name: employee.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Feb 19, 2022
===========================================
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

// Export the model
module.exports = mongoose.model('Employee', EmployeeSchema);