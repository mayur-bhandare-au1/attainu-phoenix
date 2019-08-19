let a = [1,2,3,4,5,6,7];
let b = [8,9,10,11,12,13,14];

a.push.apply(a,b);

console.log(a);