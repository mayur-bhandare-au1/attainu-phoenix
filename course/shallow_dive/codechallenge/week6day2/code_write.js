'use strict';

var fs = require('fs');



var write = function(file, message, n) {

    //REPEAT() Method to Make a new string by copying a string
    fs.writeFile(file, message.repeat(n), function(err) {
        if (err) {
            throw err;
        }
        console.log("written");
    });

}




write('test.txt', "Welcome to attainu\n", 20);