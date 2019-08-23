function myfunc(num){
  let n = num;
  let sum =0;
  for(let i =1; i<=n;i++){
    sum = sum + (i*i)
  }
  return sum;

  
}

function myfunc2(num){
  let n = num;
  let sum =0;
  for(let i =1; i<=n;i++){
    sum = sum + i;
  }
  return sum*sum;
}

function main(){
  let n =100;
  let x =  myfunc(100);
  let y = myfunc2(100);
  //console.log(x,y);
  let result = y - x;
  console.log(result);
}

main();