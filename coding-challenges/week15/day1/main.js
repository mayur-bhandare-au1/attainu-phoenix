import {createStore} from 'redux';

let scoreReducer = (state,action) =>{
	if (state === undefined) {
		return {counter:0};
	}
	if(action.type === "INREMENT"){
		let newState = state;
		newState.counter = newState.counter + 1;
		return newState;
	}
	if(action.type === "DECREMENT"){
		let newState = state;
		newState.counter = newState.counter -1;
		return newState;
	}
	if(action.type === "RESET"){
		let newState = state;
		newState.counter = 0;
		return newState;
	}
}

let store = createStore(scoreReducer);

store.subscribe(=>{
	let state = store.getState();
	console.log("Counter ==>",state);
});

store.dispatch({
   type: "INREMENT"
});

store.dispatch({
   type: "DECREMENT"
});

store.dispatch({
   type: "RESET"
});