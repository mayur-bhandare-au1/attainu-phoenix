'use strict';

var factorial = function(num){
	if(num == 0 || num == 1){
		return 1;
	}
	else{
		for(var i=num -1;i>= 1;i--){
			num = num * i;
		}
		return num;
	}

}



console.log(factorial(5));