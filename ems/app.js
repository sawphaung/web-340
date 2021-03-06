/*
============================================
Title: User Interface Development
File Name: app.js
Author: Professor Krasso
Modified By: Saw Phaung
Date: Feb 06, 2022
===========================================
*/
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet"); // Library for XSS attacks
var bodyParser = require("body-parser"); // CSFR 
var cookieParser = require("cookie-parser"); // CSFR
var csrf = require("csurf"); // CSFR 
var csrfProtection = csrf({cookie: true}); // Setup csrf Protection

// Mongoose Connection
var mongoose = require("mongoose");
var Employee = require('./models/employee');
const { cookie } = require("express/lib/response");
// database connection string to MongoDB Atlas
const mongoDB = "mongodb+srv://admin:5yBXoiUxHw7MA8Mh@buwebdev-cluster-1.azwcv.mongodb.net/ems";

// DB Connection
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
// Error
db.on("error", console.error.bind(console,"MongoDB connection error!"));
// success
db.once("open", function(){
    console.log("Application connected to mLab MongoDB instance");
})

// initialize the express Application
var app = express();
/* Morgan logger */
app.use(logger("short"));

// Security
/* helmet, helps prevent xss */
app.use(helmet.xssFilter());
/* parse response object body */
app.use(bodyParser.urlencoded({
    extended: true,
}));

/* Parse Cookie header and populate req.cookies with an object keyed by the cookie names. */
app.use(cookieParser());
/* CSRF cookie */
app.use(csrfProtection);
app.use(function(request, response, next){
    var token = request.csrfToken();
    response.cookie("XSRF-Token", token);
    response.locals.csrfToken = token;
    next();
});

/**
 * Sets up the view engine, view's directory path, and the server port.
 */
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 8080 );

// Get Images
app.use(express.static('public')); 
app.use('/images', express.static('images'));

// CSS 
app.use('/css',express.static('css'));

// Routes
app.get("/", function(request, response) {
    response.render("index", {
        title: "Home Page",
        message: "EMS"
    });
});

app.get("/new", function(request, response) {
    response.render("new", {
        title: "Data Entry Page",
        message: "Add New Employee",
    });
});

// Grab the data from database
app.get("/list", function(request, response) {
    Employee.find({}, function(error, employees) {
        if(error) throw error;
        response.render("list", {
            title: "Employee Records",
            message: "Employee Lists",
            employees: employees,
         });  
    });
});

// List - Detail
app.get("/view/:queryName", function(request, response){
    var queryName = request.params.queryName;
    
    Employee.find({'name': queryName}, function(error, employees){
        if(error) throw error;

        if(employees.length > 0) {
            response.render("view", {
                title: "Employee Record",
                message: "Employee Details",
                employees: employees,
            });
        } else {
            response.redirect("/list");
        }
    });

});

// Delete Id
app.get('/view/delete/:id', function(req, res) {
  const employeeId = req.params.id; 

  Employee.findByIdAndDelete({'_id': employeeId}, function(err, employees) {
    if (err) {
      throw err;
    }
    else {
      res.redirect('/list');
    }
  });
});



// Update the form submission sending to the mLab
app.post("/process", function(request, response){
    // console.log(request.body.txtName);

    if(!request.body.txtFirstName || !request.body.txtLastName ) {
        response.status(400).send("Please enter this field.");
        return;
    }

    var employeeFirstName = request.body.txtFirstName;
    var employeeLastName = request.body.txtLastName;
    // console.log(empFirstName, empLastName);

    // create new
    var employee = new Employee({
        firstName: employeeFirstName,
        lastName: employeeLastName,
    });

    // save
    employee.save(function(error){
        if(error) throw error;
        console.log(employeeFirstName, employeeLastName + ' saved successfully!');
    });

    response.redirect("/list");
});


// Create Server
http.createServer(app).listen(app.get("port"), function(){
    console.log("Application started on port " + app.get("port"));
});