'use strict';
var fs = require("fs");


var iterate_loop = function(string,n){
    var repeatedString = "";
    for(var i=0;i<=n;i++){
        repeatedString +=string
    }
    return repeatedString;
}


var messageWriter = function (fileName, message, num) {
    
        fs.writeFile(fileName, iterate_loop("Welcome to AttainU\n",50), function (err) {
            if (err) throw err;
            console.log('Written');
        })
  

}

messageWriter("test.txt", "Welcome to AttainU\n", 50);




