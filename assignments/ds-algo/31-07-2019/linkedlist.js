class Node {
	constructor(value,next=null){
		this.value = value;
		this.next = next;
	}
	toString(){
		return this.value;
	}
}

class LinkedList {
	constructor(){
		this.head = null;
		this.tail = null;

	}

	append(value) {
		let newNode = new Node(value);

		if(!this.tail){
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}

	prepend(value) {
		let newNode = new Node(value);

		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			newNode.next = this.head;
			this.head = newNode;
		}
	}

	search(value) {
		let currentNode = this.head;
		while(currentNode){
			if(currentNode.value === value){
				return currentNode;
			}
			currentNode = currentNode.next;
		}
		return null;
	}

	print() {
		let currentNode = this.head, values = [];
		while(currentNode){
			values.push(currentNode.value);
			currentNode = currentNode.next;
		}
		console.log(values);
	}

	delete() {}
}

let l = new LinkedList();
l.append("javascript");
l.append("Python");
l.append("Rust");
l.append("Go");

l.print();

l.prepend("C++");
l.prepend("C");
l.prepend("Cobal");

l.print();