function myfun(arr,n){
var map = [];
var indexpointer =[];
var temp = [];

for(let i=0;i<arr.length;i++){
  if(map[arr[i]] != null){
    let index = map[arr[i]];
    indexpointer[0] = index;
    indexpointer[1] = i;
    break;
  }
  else{
    map[n - arr[i]] = i;
  }
}
for(let i=0; i<indexpointer.length;i++){
  temp.push(arr[indexpointer[i]]);
}
return temp;
}
 
 let arr = [1,2,4,5,6,10,12];
 let n = 10;
console.log(myfun(arr,n));