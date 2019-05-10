var fs = require("fs");

class MyFile{
	constructor(value){
		this.data = value;
	}

	get Data(){
		return fs.readFileSync(this.data,'utf-8');
		
	}
	set Data(content){

		fs.writeFileSync(this.data,content,'utf-8');


	}

}

let obj = new MyFile("abc.txt");


console.log(obj.Data);
obj.Data = "Hello";
console.log(obj.Data);
