

function palindrome(string) {
	if(!string){
		console.log("Please eNter argments");
		return false;
	}
	string = string.toLowerCase();
	//console.log(string);
	for(let i=0;i< string.length;i++){
		if(string[i] !== string[string.length -i -1]){
			return false; 
		}

	}
	return true;
}

function main(){
	//console.log(process.argv[2])
	let str = process.argv[2];

	console.log(palindrome(str));
}

//console.log(palindrome("Mom"));
main();