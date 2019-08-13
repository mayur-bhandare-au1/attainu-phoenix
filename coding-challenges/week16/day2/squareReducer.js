let squareReducer = (number,action)=>{

	if(action.type == "SET_NUMBER"){
		return number = action.number * action.number;
	}

	return squareReducer;
}

export default squareReducer;