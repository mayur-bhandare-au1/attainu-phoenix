const fs = require("fs");
const HashTable = require("./Main.js");
function readFile(file,callback){
	fs.readFile(file,"utf-8",callback);
}

function generateHT(err,data){
   let h = new HashTable();	
   let csv = data.trim().split("\n");
   for(let i =0; i<csv.length; i++ ){
   	   let row = csv[i].split(",");
   	   //console.log(row[1]);
		h.set(row[0],row[1]);
   }
   //console.log(csv);
  h.print();
  console.log(h.get("Goa"));
  console.log(h.get("Kerala"));
  

}

function main(){
	readFile("computer-data.csv",generateHT)
}

main();