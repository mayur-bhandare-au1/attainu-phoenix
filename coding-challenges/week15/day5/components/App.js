import React from 'react';
import {Provider} from 'react-redux';

import {Display} from './display.js';
import {Input} from './input.js';
import {Button} from './button.js';
import {MystoreMapper,Mystore} from  '../main.js' 


class App extends React.Component{
	render() {
		return (
			<Provider store={Mystore}>
			 <div>
			 	<Display/>
			 	<Input />
			 	<Button />
			 	</div>
			 	</Provider>
		);
	}
}

export {App};