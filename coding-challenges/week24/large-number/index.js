function randomArray(max){
    let arr = [];
    for(var i=0;i<= max;i++){
        arr.push(Math.floor(Math.random()*10));
    }
    return arr;
}



function largest(arr){
    let largest = Math.max.apply(null,arr);
    return largest;
}

function smallest(arr){
    let smallest = Math.min.apply(null,arr);
    return smallest;
}

function main(){
    let x = randomArray(15);
    console.log(x);
    console.log(largest(x));
    console.log(smallest(x));
}

main();
