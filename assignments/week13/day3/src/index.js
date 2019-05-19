import React from 'react';
import ReactDom from 'react-dom';
import Login from './components/loginform'

class App extends React.Component{
	render() {
		return (
			<Login />
		);
	}
}

ReactDom.render(<App />, document.getElementById("root"));