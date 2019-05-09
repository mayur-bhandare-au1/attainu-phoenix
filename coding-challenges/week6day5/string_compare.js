'use script';

var compare = function(a, b) {
    var diffCount = 0;
    var diffLength = 0;

    if(a.length != b.length) {
        diffLength = Math.abs(a.length - b.length);
        
    }
    

    for(var i = 0; i < a.length; i++) {
        if(a[i] != b[i]) {
            diffCount = diffCount + 1;
        }
        
    }
    return diffCount + diffLength;
};
    
console.log(compare("java", "javascript"));