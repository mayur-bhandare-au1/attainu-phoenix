const JFile = require("jfile");


let searchFile = (file,string) =>{
   // let value;
  	let myfile = new JFile(file);
  	console.log(myfile.grep(string));




}


searchFile('abc.txt','mayur');