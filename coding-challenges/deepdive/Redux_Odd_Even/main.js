import {createStore} from 'redux';

let scoreReducer = (state,action) =>{
	let newState = {
		number:0,
		isOdd:false,
		isEven:false
	}
	if (state === undefined) {
		return {newState};
	}
	if(action.type === "CHECK_NUMBER"){
		newState.number = action.number;
		if(newState.number %2 ==0){

			newState.isEven = true;
		}
		else{
			newState.isOdd = true;
		}
	}
	return newState;
	
}

let store = createStore(scoreReducer);

store.subscribe(()=>{
	let state = store.getState();
	console.log("Output ==>",state);
});

store.dispatch({
   type: "CHECK_NUMBER",
   number:123
});

store.dispatch({
   type: "CHECK_NUMBER",
   number:3
});

store.dispatch({
   type: "CHECK_NUMBER",
   number:4
});
