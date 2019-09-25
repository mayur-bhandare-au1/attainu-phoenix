class Node {
	constructor(value,next=null){
		this.value = value;
		this.next = next;
		this.data =null;
	}
	toString(){
		return this.value ;
	}
}

class LinkedList {
	constructor(){
		this.head = null;
		this.tail = null;

	}

	append(value,data) {
		let newNode = new Node(value);
        if(data) { newNode.data = data; } 
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
			values.push(currentNode.toString());
			currentNode = currentNode.next;
		}
		console.log(values);
	}

	delete(val) {
		if(!this.head) { return null; }
		if(this.head.value === val){
			this.head = this.head.next;
			return;
		} 
		let currentNode = this.head;
		while(currentNode.next){
			if(currentNode.next.value === val){
				currentNode.next = currentNode.next.next;
				break;
			}
			currentNode = currentNode.next;
		}
		if(this.tail.value === val){
			this.tail = currentNode;
		}
	}
}

//let l = new LinkedList();
//l.append("Instructor");
//l.print();

module.exports = LinkedList;