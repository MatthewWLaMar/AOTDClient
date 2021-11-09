import React, { Component } from 'react';
import {Input, Form, Label, Button} from 'reactstrap'
// import styled from "styled-components"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" }
    }

    completeLogin = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/user/login',{
            method: 'POST',
            body: JSON.stringify({user:{username: this.state.username, passwordhash: this.state.password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('token',data.sessionToken) 
            this.setState([data.ID])
            console.log(data)
        }).catch(err => {
            alert('failed to login')
            console.log(err)
        })

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() { 
        return ( 
        <div>
            <Form onSubmit={this.completeLogin}>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => this.handleChange(e)} name="username" value={this.state.username}  placeholder="Username" type="text"/>
                    {/* <br /> */}
                    <Label htmlFor="Password">Password</Label>
                    <Input onChange={(e) => this.handleChange(e)} name="password" value={this.state.password} placeholder="Password" type="text"/>
                    {/* <br /> */}
                    <Button type="submit">Login</Button>
                    <br />
                    {/* <p>Don't have an account? <a href="/signup" onClick={props.switchToSignup}>Signup</a></p> */}

            </Form>
        </div> );
    }
}
 
export default Login;