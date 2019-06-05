let numberReducer = (number=0,action) =>{

	if(action.type == "SET_NUMBER"){
		return number = action.number;
	}

	return numberReducer;
}

export default numberReducer;