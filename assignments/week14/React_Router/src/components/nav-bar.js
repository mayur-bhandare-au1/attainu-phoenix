import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class NavBar extends React.Component{
	render() {
		return (
			

			<div className="col-md4 offset-md-4">
        		<ul className="nav justify-content-center">
          			<li className="nav-item">
            			<Link className="nav-link active" to="/">Home</Link>
          			</li>
          			<li className="nav-item">
            			<Link className="nav-link" to="/about-us">AboutUs</Link>
          			</li>
          			<li className="nav-item">
            			<Link className="nav-link" to="/contact-us">ContactUs</Link>
          			</li>
          
        		</ul>

        </div>
		);
	}
}