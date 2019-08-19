const LinkedList = require("./LinkedList.js");

class HashTable {
	constructor(size=8){
		this.size = size;
		this.array = [];
		for(let i=0 ; i<this.size ; i++){
			this.array.push(new LinkedList());
		}
	}
	hash(key){
		let sum =0;
		Array.from(key).forEach(char => sum += char.charCodeAt(0) );
		return sum % this.size;
	} 

	getList(key){
		let hashId = this.hash(key);
		return this.array[hashId];
	}

	set(key , value){
		
		let linkedList = this.getList(key);
		let node = linkedList.search(key);
		if(node) {
			node.data = value;
		} else {
			linkedList.append(key,value);
		}
	}
	get(key){
          let linkedList = this.getList(key);
          let node = linkedList.search(key);
          if(node){
          	return node.data;
          }
          else{
          	return null;
          }
	}
	delete(key){
		 let linkedList = this.getList(key);
		 linkedList.delete(key);
	}

	print(){
		this.array.forEach(a => a.print());
	}
}
module.exports = HashTable;
/*let h = new HashTable();
h.set("abc","yz");
h.print();*/