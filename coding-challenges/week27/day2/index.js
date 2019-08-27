const LinkedList = require("./LinkedList.js");

function removeAll(){

let l = new LinkedList();
l.append("Instructor");
l.append("new");
l.append("Instructor");
l.append("Instructor");
l.append("Mayur");
l.print();
let key = "Instructor";
while(l.search(key) != null){
	l.delete(key);
}
l.print();

}

removeAll();