'use strict';

const isPowerOfTwo = (x) =>{
	return Math.log2(x) % 1 === 0;
}

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(9));