import React from 'react';
import {connect} from 'react-redux';
import {MystoreMapper} from  '../main.js'

class InputComp extends React.Component{
	constructor(props){
		super(props);

		this.inputChange = this.inputChange.bind(this);
	}
inputChange(event){
	let number = parseInt(event.target.value);
	this.props.dispatch({
		type: "NUMBER_UPDATE",
		input: number
	});
}

render() {
		return (
			<input onChange={this.inputChange} type="number" />
		);
	}	

}

let Input = connect(MystoreMapper)(InputComp);

export {Input};