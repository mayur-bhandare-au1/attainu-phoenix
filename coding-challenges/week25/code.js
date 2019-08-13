function seq(n){
	let arr = [n];

	while(n!=1){
		if(n%2==0){
			n = n/2;
		}
		else {
			n = 3 * n + 1;
		}
	  arr.push(n);	
	} 
	console.log(arr.length);
	return arr;
}

//console.log(seq(500));
console.log(seq(1000000));

