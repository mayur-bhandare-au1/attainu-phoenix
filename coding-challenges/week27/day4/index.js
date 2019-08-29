/* Remove duplicates in O(n) compleity */

let array = [1,2,3,4,5,6,6,7];

let obj = {};

for(let i of array){
	obj[i] = true;
} 

let result = Object.keys(obj);

console.log(result);