import React from 'react';
import {connect} from 'react-redux';
import {MystoreMapper} from  '../main.js'

class DisplayComp extends React.Component{

	render() {
		return (
			<h2>{this.props.output}</h2>
		);
	}
}

let Display = connect(MystoreMapper)(DisplayComp);

export {Display};