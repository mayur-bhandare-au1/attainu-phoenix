'use strict';

const fs = require('fs');


let searchFile = (file) => {
    // let value;
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) throw err;

        //console.log(string);
        let newdata = data.replace(/\r\n/g, ",").split(',');
        console.log(bubbleSort(newdata));

    })


}

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


searchFile('data.csv');