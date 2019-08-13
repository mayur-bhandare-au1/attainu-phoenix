'use strict';

var globalCounter = 0;
var gloBtn = document.getElementById("gloBtn");
var objBtn = document.getElementById("objBtn");


	gloBtn.addEventListener("click",function(){
		globalCounter = globalCounter+1;
		var gloUpdate = document.getElementById("global");
		gloUpdate.innerText = globalCounter;
	});


var objCounter = {
	obj : 0
};
objBtn.addEventListener("click",function(){
		objCounter.obj = objCounter.obj +1;
		var objUpdate = document.getElementById("object");
		objUpdate.innerText = objCounter.obj;
	});


var closureCounter = () =>{

	var counter = 0;
	var innerClosure = () =>{
		counter++;
		return counter;
	}
	return innerClosure;
}
var closureCount = closureCounter();
var cloBtn = document.getElementById("cloBtn");
		cloBtn.addEventListener("click",function(){
		
			var cloUpdate = document.getElementById("closure");
			cloUpdate.innerText =closureCount();
		});
