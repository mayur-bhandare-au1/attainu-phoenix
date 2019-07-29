'use strict';

const fs = require('fs');


let searchFile = (file,string) =>{
   // let value;
	fs.readFile(file,'utf-8',(err,data)=>{
		if(err) throw err;

		//console.log(string);

		//console.log(data.search(string));
		console.log(data.indexOf(string));
	})


}


searchFile('abc.txt','mayur');