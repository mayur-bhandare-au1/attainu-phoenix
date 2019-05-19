import React from 'react';
import ReactDom from 'react-dom';
import Calculator from './components/calculator'

class App extends React.Component{
	render() {
		return (
			<Calculator />
		);
	}
}

ReactDom.render(<App />, document.getElementById("root"));