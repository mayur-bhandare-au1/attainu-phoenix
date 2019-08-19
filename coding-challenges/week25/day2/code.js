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
	//console.log(arr.length);
	return arr.length;
}

//console.log(seq(13));
function main(){
	let numbers = [], max =0, maxIndex =0;
	for(let i=1;i<1000000;i++){
     numbers.push(seq(i));
     
   }	
  for(let i=0;i<999999;i++){
    if(numbers[i] > max)
		{
			maxIndex = i;
			
		}

  }
  console.log(maxIndex);
}

main();


