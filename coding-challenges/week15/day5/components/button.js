import React from 'react';
import {connect} from 'react-redux';
import {MystoreMapper} from  '../main.js'


class ButtonComp extends React.Component{
	constructor(props){
		super(props);

		this.buttonClick = this.buttonClick.bind(this);
		this.buttonClick2 = this.buttonClick2.bind(this);
		this.buttonClick3 = this.buttonClick3.bind(this);
	}

	buttonClick(){
		this.props.dispatch({
			type: "SQUARE"
		});	
	}

	buttonClick2(){
		this.props.dispatch({
			type: "CUBE"
		});	
	}

	buttonClick3(){
		this.props.dispatch({
			type: "SQUARE_ROOT"
		});	
	}

	render() {
		return (
			<div>
				<button onClick={this.buttonClick}>SQUARE</button>
				<button onClick={this.buttonClick2}>CUBE</button>
				<button onClick={this.buttonClick3}>SQUARE_ROOT</button>

			</div>
		);
	}
}

let Button = connect(MystoreMapper)(ButtonComp);

export {Button};