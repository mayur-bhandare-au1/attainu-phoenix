'use strict';

var N = 10;

var str = "";

for (var i = 1; i <= N; i++) {

    str += "*";
    console.log(str);

}


for (var i = 1; i <= N; i++) {
    var str = "";

    for (var j = 1; j <= (N - i + 1); j++) { 
        str += "*";

    }
    console.log(str);
}