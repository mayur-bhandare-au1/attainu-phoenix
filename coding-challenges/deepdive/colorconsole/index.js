'use strict';

class ColorConsole{
	constructor(col){
		this.col = col;
	}

 	log(text) {
 		switch (this.col){
 			case "Red":
 				console.log('\x1b[31m',text);
 				break;
 			case "Green":
 				console.log('\x1b[32m',text);
 				break;
 			case "Yellow":
 				console.log('\x1b[33m',text);
 				break;		

 			default:
 				console.log("Sorry, Please Pass Correct Arguments");
 		}
 	}
}

let myconsole = new ColorConsole("Green");
myconsole.log("Attain University");


let myconsole2 = new ColorConsole("Red");
myconsole2.log("Attain University");