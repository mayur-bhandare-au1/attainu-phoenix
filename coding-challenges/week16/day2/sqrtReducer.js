let sqrtReducer = (number,action) =>{

	if(action.type == "SET_NUMBER"){
		return number = Math.sqrt(action.number);
	}

	return sqrtReducer;
}

export default sqrtReducer;