import React from 'react';
import ReactDOM from 'react-dom';

export default class Calculator extends React.Component {
	

	constructor(props) {
		super(props);

		this.state ={
			num1: 0,
			num2: 0,
			result: ""

		};
         
         this.num1Handle = this.num1Handle.bind(this);
         this.num2handle = this.num2handle.bind(this);
         this.addOperation = this.addOperation.bind(this);
         this.subOperation = this.subOperation.bind(this);
         this.mulOperation = this.mulOperation.bind(this);
         this.divOperation = this.divOperation.bind(this);

       
	}

	num1Handle(event){
		this.setState({
			num1: parseInt(event.target.value)
		});
		console.log(event.target.value);
	}
	num2handle(event){
		this.setState({
			num2: parseInt(event.target.value)
		});
		console.log(event.target.value);
	}
   
    addOperation(){
    	let num1 = this.state.num1;
    	let num2 = this.state.num2;
    	let output = num1 + num2;

    	this.setState({
    		result:output
    	});

    	console.log(this.state.result);
    }

    subOperation(){
    	let num1 = this.state.num1;
    	let num2 = this.state.num2;
    	let output = num1 - num2;

    	this.setState({
    		result:output
    	});

    	console.log(this.state.result);
    }

    mulOperation(){
    	let num1 = this.state.num1;
    	let num2 = this.state.num2;
    	let output = num1 * num2;

    	this.setState({
    		result:output
    	});

    	console.log(this.state.result);
    }

    divOperation(){
    	let num1 = this.state.num1;
    	let num2 = this.state.num2;
    	let output;
    	num2 ==0 ? output = "Cannot Divide by zero" : output= num1 / num2;
    	

    	this.setState({
    		result:output
    	});

    	console.log(this.state.result);
    }


	render() {
		return (
			<div className="main">
              <h1>React Calculator !</h1>
              <label>Number1</label>
              <input type="number" onChange={this.num1Handle} /><br/>
              <label>Number2</label>
              <input type="number" onChange={this.num2handle} /><br/>
              <button onClick={this.addOperation} >+</button>
              <button onClick={this.subOperation}>-</button>
              <button onClick={this.mulOperation}>*</button>
              <button onClick={this.divOperation}>/</button>
              <h1 className="result">{this.state.result}</h1>
			</div>
		);
	}
}
