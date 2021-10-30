import React, { Component } from 'react';
import {Input, Form, Label, Button} from 'reactstrap'
// import styled from "styled-components"

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", email:"", password: "" }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {

        fetch('http://localhost:3000/user/login',{
            method: 'POST',
            body: JSON.stringify({user:{username: this.state.username, password: this.state.password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => response.json())
        .then((data) => { 
            this.setState(data.sessionToken)
            this.setState(data.ID)
            console.log(data)
        }).catch(err => {
            alert('failed to login')
            console.log(err)
        })

    }
    render() { 
        return ( 
        <div>
            <Form onSubmit={this.componentDidMount}>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => this.handleChange(e)} name="username" value={this.state.username}  placeholder="Username" type="text"/>
                    {/* <br /> */}
                    <Label htmlFor="password">Password</Label>
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