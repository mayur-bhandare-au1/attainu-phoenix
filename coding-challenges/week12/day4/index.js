const fs = require('fs');

class MyFile {
    constructor(fileName) {
        this.fileName = fileName;

    }

    get data() {
        console.log("getter method called");
        return fs.readFileSync(this.fileName, 'utf8');
    }

    set data(data) {
       fs.writeFileSync('test.txt', data);

        console.log('text saved!');
    }
} 

let myFile = new MyFile("test.txt");
myFile.data = "I m test";
console.log(myFile.data);