import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

class Auth  extends Component {
    constructor(props) {
        super(props)
        this.state = {active: "login"}
    }

    switchToRegister = (e) => {
        e.preventDefault()
        this.state.active('register')
    }

    switchToLogin = () => {
        this.state.active('login')
    }

    render() { 
        return (  
        <row>
            <column>
                {this.state.active === 'login' ? 'Go ahead and login!' : 'You better sign up!'}
            </column>
            <column>
                {this.state.active === 'login' ? <Login switchToRegister={this.switchToRegister} updateToken={this.state.updateToken} updateID={this.state.updateID}/> : <Register switchToLogin={this.state.switchToLogin} updateToken={this.state.updateToken} updateID={this.state.updateID}/> }
            </column>
            
        </row> );
    }
}
 
export default Auth;