import React, { Component } from 'react';

class Login extends Component {
   

    render() {
        return (
              <div>
              <header>
              <h1>SIMPLE LOGIN PAGE</h1>
              </header>
                <section className="main">
               <form>
                  <fieldset>
                      <legend>
                         <h1>Login</h1>
                      </legend>
                         <label>
                             USERNAME
                            <input type="text"  placeholder="username"/>
                         </label>
                         <label>
                             PASSWORD
                             <input type="password"  placeholder="password"/>
                         </label>
                         <br/>
                         <button className="btn">LOGIN</button>
                   </fieldset>
                </form>
                </section>
                </div>
             
          
        );
    }
}



export default Login;
