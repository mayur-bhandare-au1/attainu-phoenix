import React from 'react';
import ReactDOM from 'react-dom';


class OddEven extends React.Component{

  constructor(props){
  	super(props);
  	this.state ={
  		output:"",
  		result:"Please Enter No"
  	};
  	this.handleChange = this.handleChange.bind(this);
  	this.oddevven = this.oddevven.bind(this);
     
  }

  handleChange(event){
  	
  	//let input = event.target.value;
  	this.setState({
  		output : event.target.value

  	});
  }

  oddevven(){
  	
  	this.state.output % 2 === 0 ? this.setState({result:"even"}):this.setState({result:"odd"})
  	

  	
  	//console.log(typeof this.state.result);
  	//console.log(typeof this.state.output);
  }

	render() {
		return (
			<div>
			  <p>Enter Number
			  	<input type="text" onChange={this.handleChange} />
			   </p>
			   <p>
			   	 <button onClick={this.oddevven}>Submit </button>
			   </p>
			   <p> Output {this.state.result} </p>

			</div>
		);
	}
}


ReactDOM.render(<OddEven />, document.getElementById('root'));


