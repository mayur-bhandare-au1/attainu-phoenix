let frequency = (arr)=>{
	let obj = {};
	arr.forEach(a => {
		obj[a] = obj[a] ? obj[a] + 1 : 1
	});
	return obj;
}

let names = ["Ansal","vaibhav","Divyam","vaibhav","Dwarak"];

console.log(frequency(names));