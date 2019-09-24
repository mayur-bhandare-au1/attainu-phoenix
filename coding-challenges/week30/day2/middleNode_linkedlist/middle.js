const LinkedList = require("./LinkedList.js");

function middleNode(){

let l = new LinkedList();
l.append("1");
l.append("2");
l.append("3");
l.append("4");
l.append("5");
l.append("6");
//l.print();

let slow = l.head;
let fast = l.head;

//console.log(slow.value);

if(!slow){
	return null;
}
while(fast && fast.next != null){
	slow = slow.next;
	fast = fast.next.next;
}

console.log(slow.value)
}

middleNode();