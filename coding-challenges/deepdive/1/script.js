'use strict';
var i = 0;
var timer ;
var change = function() {
  var id = document.getElementById("change");
  var color = ["green","red"];
  id.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}

timer = setInterval(change, 5000);

var slowbtn = document.getElementById("slow");
slowbtn.addEventListener("click",function(){
	clearInterval(timer)
	timer = setInterval(change,10000);
});

var fastbtn = document.getElementById("fast");
fastbtn.addEventListener("click",function(){
	clearInterval(timer)
	timer = setInterval(change,1000);
});


