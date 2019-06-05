import {createStore, combineReducers} from 'redux';
import numberReducer from './components/numberReducer.js';
import squareReducer from './components/squareReducer.js';
import sqrtReducer from './components/sqrtReducer.js';
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