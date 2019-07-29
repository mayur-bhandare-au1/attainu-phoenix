'use strict';

const fs = require('fs');


let searchFile = (file,string) =>{
   // let value;
	fs.readFile(file,'utf-8',(err,data)=>{
		if(err) throw err;

		//console.log(string);
          data = data.split("\n");
          data.forEach((d,i) =>{
          	if(d.includes(string)){
              console.log("Line => ", i,d);
          	}
          })
		//console.log(data.search(string));
		//console.log(data.indexOf(string));
	})


}


searchFile('abc.txt','mayur');