import {createStore, combineReducers} from 'redux';
import numberReducer from './numberReducer.js';
import squareReducer from './squareReducer.js';
import sqrtReducer from './sqrtReducer.js';
let reducer = combineReducers({
	number:numberReducer,
	square:squareReducer,
	sqrt:sqrtReducer
});

let store = createStore(reducer);


store.subscribe(()=>console.log(store.getState()));

store.dispatch({
   type: "SET_NUMBER",
   number:12
});

store.dispatch({
   type: "SET_NUMBER",
   number:9
});