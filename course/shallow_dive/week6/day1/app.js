/*
Express.Js Program

Routes :-

 1) /addition with two parameters  (Perform ADD operation)
 2) /substration with two parameters  (Perform MINUS Operation)
 3) /multiplication with two parameters  (Perform MUL operation)
 4) /division with two parameters (Perform DIV operation)
 
Usage :-

  localhost:3000/addition/parameter1/parameter2/
  eg :- localhost:3000/addition/2/4 -> OUTPUT = 6
*/

"use strict";

var express = require("express");
var app = express();



app.get("/addition/:num1/:num2", (request, response) => {
    var num1 = request.params.num1;
    var num2 = request.params.num2;
    var result = parseInt(num1) + parseInt(num2);
    response.send("Addition is " + result);
});



app.get("/substraction/:num1/:num2", (request, response) => {
    var num1 = request.params.num1;
    var num2 = request.params.num2;
    var result = parseInt(num1) - parseInt(num2);
    response.send("Substraction is " + result);
});



app.get("/multiplication/:num1/:num2", (request, response) => {
    var num1 = request.params.num1;
    var num2 = request.params.num2;
    var result = parseInt(num1) * parseInt(num2);
    response.send("Multiplication is " + result);
});



app.get("/division/:num1/:num2", (request, response) => {
    var num1 = request.params.num1;
    var num2 = request.params.num2;
    var result = parseInt(num1) / parseInt(num2);
    response.send("Division is " + result);
});

app.listen(3000);