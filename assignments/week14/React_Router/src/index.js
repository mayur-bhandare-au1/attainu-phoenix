import React from'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBar from './components/nav-bar';
class App extends React.Component{
render(){
  return(
    <Router>
    <div className="container-fluid">

      {/*nav-bar*/}
      <div className="row"> 
        <NavBar />

      </div>
      <Route path='/' exact={true} component= {Home} />
      <Route path='/about-us' component={AboutUs}/>
      <Route path='/contact-us' component={ContactUs}/>  
    </div>

    </Router>
    
  );
} 
}

class Home extends React.Component{
  render(){
    return(
    
      <div className='row'>
        <div className="col-md-4 offset-md-4 ">
          <h2>AttainU-Phoenix</h2>
          <hr/>
          <p>
            We are 17 students trying to learn web development using JS. 
          </p>
        </div>
      </div>
    
    );
  }
}

class AboutUs extends React.Component{
  render(){
    return(
      <div className='row'>
        <div className="col-md-4 offset-md-4">
          <h2>About-Us</h2>
          <hr/>
          <p>
            We are from India , from North to South ,East to West. Enjoying here.</p> 

        </div>

      </div>

    );
  }
}

class ContactUs extends React.Component{
  render(){
    return(
      <div className='row'>
        <div className="col-md-4 offset-md-4">
        <h2>Contact-Us</h2>
        <p>To hire us,please write to students@attainu.com</p>
        </div>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root")); 