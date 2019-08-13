import {createStore} from 'redux';

let scoreReducer = (state,action) =>{
	let newState = {
		number:0,
		input:0,
		output:"",


	}
	if (state === undefined) {
		return {newState};
	}

	if(action.type  === "NUMBER_UPDATE"){
		newState.input = action.input;
		//console.log(newState.input);

	}
	if(action.type === "SQUARE"){
		newState.number = state.input;
		//	console.log(newState.number);
		newState.output = newState.number * newState.number;
	}
	if(action.type === "CUBE"){
		newState.number = state.input;
		//	console.log(newState.number);
		newState.output = newState.number * newState.number * newState.number;
	}
	if(action.type === "SQUARE_ROOT"){
		newState.number = state.input;
		//	console.log(newState.number);
		newState.output = Math.sqrt(newState.number);
	}
	return newState;
	
}

let Mystore = createStore(scoreReducer);

let MystoreMapper = (state) =>{
	return state;
}

export {Mystore,MystoreMapper};


