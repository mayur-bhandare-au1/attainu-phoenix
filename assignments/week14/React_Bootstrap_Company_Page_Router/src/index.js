import React from'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBar from './components/nav-bar';
class App extends React.Component{
render(){
  return(
    <Router>
   

      {/*nav-bar*/}
    <NavBar />
      <Route path='/' exact={true} component= {Home} />
      <Route path='/about' component={AboutUs}/>
      <Route path='/contact-us' component={ContactUs}/>  
   

    </Router>
    
  );
} 
}

class Home extends React.Component{
  render(){
    return(
    
       <div className="container-fluid">
   	<div className="row">
   		<div className="col-md-12  text-center">
   			<h1 className="display-4">Mayurwebdev.com</h1>
   			<hr/>
   		</div>
   	</div>

   	<div className="row mt-3">
   		<div className="col-md-3">
   			<h1>Feature 1</h1>
   			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi cum exercitationem omnis, enim libero dolorem suscipit totam quidem dolor dicta?</p>
   		</div>
   		<div className="col-md-3">
   			<h1>Feature 2</h1>
   			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi cum exercitationem omnis, enim libero dolorem suscipit totam quidem dolor dicta?</p>
   		</div>
   		<div className="col-md-3">
   			<h1>Feature 3</h1>
   			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi cum exercitationem omnis, enim libero dolorem suscipit totam quidem dolor dicta?</p>
   		</div>
   		<div className="col-md-3">
   			<h1>Feature 4</h1>
   			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi cum exercitationem omnis, enim libero dolorem suscipit totam quidem dolor dicta?</p>
   		</div>
   	</div>

   </div>
    
    );
  }
}

class AboutUs extends React.Component{
  render(){
    return(
    		 <div className="container-fluid">
   	<div className="row">
   		<div className="col-md-12  text-center">
   			<h1 className="display-4">About Us</h1>
   			<hr/>
   		</div>
   	</div>

   	<div className="row mt-4">
   		<div className="col-md-6">
   			<h1>CEO</h1>
   			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi cum exercitationem omnis, enim libero dolorem suscipit totam quidem dolor dicta?</p>
   		</div>
   		<div className="col-md-3 offset-md-2">
   			<img className="img-responsive rounded-circle" width="150px" height="150px"  src="https://ui-ex.com/images/person-vector-2.png"/>
   		</div>
   		
   	</div>
      <div className="row mt-4">
      <div className="col-md-6">
        <h1>CTO</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi cum exercitationem omnis, enim libero dolorem suscipit totam quidem dolor dicta?</p>
      </div>
      <div className="col-md-3 offset-md-2">
        <img className="img-responsive rounded-circle" width="150px" height="150px"  src="https://ui-ex.com/images/person-vector-2.png"/>
      </div>
      
    </div>
      <div className="row mt-4">
      <div className="col-md-6">
        <h1>COO</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi cum exercitationem omnis, enim libero dolorem suscipit totam quidem dolor dicta?</p>
      </div>
      <div className="col-md-3 offset-md-2">
        <img className="img-responsive rounded-circle" width="150px" height="150px"  src="https://ui-ex.com/images/person-vector-2.png"/>
      </div>
      
    </div>

   </div>
   

    );
  }
}

class ContactUs extends React.Component{
  render(){
    return(
          <div className="container-fluid">
   	<div className="row">
   		<div className="col-md-12  text-center">
   			<h1 className="display-4">Contact Us</h1>
   			<hr/>
   		</div>
    	</div>
      <div className="row mt-4">
        <div className="col-md-12">
             <h3>House no 4, Lane no 6, 14 xyz Road, Pune 411001 </h3>
        </div>
     
        
        <div className="col-md-6 offset-md-2">
          <br/><br/>
    
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30262.588222403316!2d73.87130979999999!3d18.536875199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c05c29345c63%3A0xff1ba18a1cf0f716!2sRTO+Pune+City!5e0!3m2!1sen!2sin!4v1551866050717" width="600" height="450" frameborder="0"  allowfullscreen></iframe>
     <br/><br/>
  
</div>
        </div>


      
   </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root")); 