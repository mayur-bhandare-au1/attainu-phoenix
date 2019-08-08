function maxArray(arr){
	let StartMax =0;
	let SumMax = 0;


	for (let i=0;i<arr.length;i++){
		//console.log(arr);
		//console.log(StartMax);
		StartMax = Math.max(0,StartMax + arr[i]);
		//console.log(StartMax);
		SumMax = Math.max(SumMax,StartMax);
	}

	return SumMax;
}


console.log(maxArray([-1,2,4,-3,5,2,-5,2]))