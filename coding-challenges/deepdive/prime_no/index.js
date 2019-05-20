'use strict';


const isPrime = (number) =>{
	for(let i=2;i<=number-1;i++){
		if(number%2==0){
			return false;
		}
		return true;
	}
}

const genPrime = (N) =>{
  let primeNum =[];
  let counter=1;
  
  while(primeNum.length != N){
      if(isPrime(counter)){
      	primeNum.push(counter);
      }
      counter++;
  }
  return primeNum;
}



console.log(isPrime(7));
console.log(genPrime(10));

