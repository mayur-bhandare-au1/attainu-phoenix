'use strict';
//Squares of even numbers using Imperative programming

var squareNumbers = [];

var numbers = [2,4,6,8,12,14,16,20,24,26,30,32,36];

for (var i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 == 0) {
        var square = numbers[i] * numbers[i];

        squareNumbers.push(square);

    }

}
console.log("Imperative squares:  " + squareNumbers);

//Functional programming using filter and map functions.

var even = numbers.filter(function (element) { return element % 2 == 0 });

var squares = even.map(function (element) { return element * element });

console.log("functional JS squares: " + squares);