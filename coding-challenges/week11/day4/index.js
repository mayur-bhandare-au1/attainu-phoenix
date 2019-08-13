'use strict';

var convertNumToWord = function(number){

  var names = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  var Word = "";
  while(number > 0 ){
      var digit = number % 10;
      Word = names[digit] + " " + Word;
      number = Math.floor(number / 10);
  }
    return Word;
}

console.log(convertNumToWord(3243));