import React from 'react';
import ReactDom from 'react-dom';


class App extends React.Component{
	constructor(props){
		super(props);

		this.state ={
			input :""
		}

		//this.inputUpdate =this.inputUpdate.bind(this);
		this.updateInput=this.updateInput.bind(this);
	}

	updateInput(updateInput){
		this.setState({
			input:updateInput 
		});
	}
	render() {
		return (
			<div>
		  
			<Input  input={this.state.input} updateInput={this.updateInput}/>
			<Display output = {this.state.input} />
			</div>
		);
	}
}

class Display extends React.Component{
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div>
			<h2>{this.props.output}</h2>
			</div >
		);
	}
}

class Input extends React.Component{
	constructor(props){
		super(props);
		this.inputChange = this.inputChange.bind(this);
	}

	inputChange(event){
		  this.props.updateInput(event.target.value);
		}

	render(){
		return(
				<div>
				<input type="text" onChange={this.inputChange} />
				</div>
			)
	}
}


ReactDom.render(<App />, document.getElementById("root"));