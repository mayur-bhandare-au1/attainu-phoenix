const LinkedList = require("./LinkedList.js");

function nth_Node(n) {
	let l = new LinkedList();
    l.append("1");
    l.append("2");
    l.append("3");
    l.append("4");
    l.append("5");
    //l.print();

    let firstnode = l.head;
    let secondnode = l.head;

    for(let i=0;i<n;i++){
    	secondnode = secondnode.next;
    }
    while(secondnode != null){
    	firstnode = firstnode.next;
    	secondnode = secondnode.next;
    }
    console.log(firstnode.value)
}

nth_Node(2);