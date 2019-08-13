'use strict';

function MyArray(){
this.array = [];
for(var i = 0; i < arguments.length; i++){
    this.array.push(arguments[i]);    
}//loop ends here.

}; //function ends here.

MyArray.prototype.print = function(){
    this.array.forEach(function(a) {console.log(a);});
}

MyArray.prototype.search = function(searchElement){
    for(var i = 0; i < this.array.length; i++) {
        if(this.array[i]==searchElement){
            return i;
    }
}
return -1;
}

MyArray.prototype.sort = function() {
return this.array.sort(function(a,b) {return b - a; });

}

var arr = new MyArray(3, 1, 4, 7, 5, 6, 11);
arr.print();
console.log("search function after this");
console.log( arr.search(5) );
console.log( arr.search(12) );
console.log("sort function after this");
console.log( arr.sort());