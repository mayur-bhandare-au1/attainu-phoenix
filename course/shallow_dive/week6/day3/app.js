'use strict'

// Include express in application
var express = require('express');

// Include bodyParser to handle post request in application
var bodyParser = require('body-parser');

// Create express app
var app = express();
// set app view engine to hbs 
app.set("view engine", "hbs")

// Tell Express app that we are using body parser to handle post request
app.use(bodyParser.urlencoded({ extended: false }));

// Global PLAYERS  variable to handle data throughout app
var PLAYERS = []

app.get("/players", function(request, response) {
    console.log("executed R players")
    var data = {
        players: PLAYERS,
        userName: "mayur"
    }
    response.render("index.hbs", data)

})

app.post("/players", function(request, response) {
    var playerName = request.body.player_Name
    var countryName = request.body.country_Name
    var player = {
        name: playerName,
        country: countryName
    }
    console.log("Player Name :" + player.name + " " + player.country)
    if (playerName && countryName) {
        PLAYERS.push(player)
    }


    response.redirect("/players")
})
app.listen(3000)