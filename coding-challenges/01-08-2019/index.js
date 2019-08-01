class Stack{
	constructor(){
		this.array = [];
	}
	print(){
		console.log(this.array);
	}

	push(value){
		this.array.push(value);
	}

	pop(){
		this.array.pop();
	}
}

let stack = new Stack();

for(let i=0;i<=10;i++){
	stack.push(i);
}

stack.print();


stack.pop();
stack.pop();

stack.print();