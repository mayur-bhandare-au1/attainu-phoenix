import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class NavBar extends React.Component{
	render() {
		return (
			

			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
   	<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/about">About Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/contact-us">Contact</Link>
      </li>
  </ul>
</div>
   </nav>
		);
	}
}