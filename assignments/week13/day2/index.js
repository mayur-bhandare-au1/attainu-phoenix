import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyFirstApp extends React.Component{
	render() {
		return (
			<button className="btn">CLick Me </button>
		);
	}
}


ReactDOM.render(<MyFirstApp />, document.getElementById('root'));


