function bubbleSort(arr){
	let steps =0;

	for(let i=0;i<arr.length;i++){
		let swappning = false;
		for(let j=0;j<arr.length -i;j++){
			steps += 1;
			if(arr[j]>arr[j+1]){
				let tmp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = tmp;
				swappning = true;
			}
		}
		if(!swappning){
			break;
		}
	}
	console.log("Steps ", steps);
	return arr;
}

let myarr = [1,5,3,7,9,13,9,27,15,37,31,11];
console.log(bubbleSort(myarr));



