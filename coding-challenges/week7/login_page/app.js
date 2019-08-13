'use strict';

var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));

var userDB = [
    { name: "ansal", password: "ansal123" },
    { name: "vaibhav", password: "vaibhav123" },
    { name: "divyam", password: "divyam123" }
];

app.get("/", function(request, response) {
    response.render("index.hbs");
});

app.post("/login", function(request, response) {
    var name = request.body.name;
    var password = request.body.password;

    for (var i = 0; i < userDB.length; i++) {
        if (userDB[i].name == name && userDB[i].password == password) {
            return response.send("Hello " + name + "! You have successfully logged in!");
        }
    }

    response.send("Sorry Invalid Credentials");
});

app.listen(3000);