import React, { Component } from 'react';
import {Input, Label, Button} from 'reactstrap'
// import styled from "styled-components"

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", email:"", password: "", role: "" }
    }
    
    completeRegister = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/user/create',{
            method: 'POST',
            body: JSON.stringify({user:{username: this.state.username, email: this.state.email, passwordhash: this.state.password, role: this.state.role}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => response.json())
        .then((data) => { 
            localStorage.setItem('token',data.sessionToken)
            localStorage.setItem('ID', data.ID) 
            localStorage.setItem('role', data.user.role)
            this.setState([data.id])
            console.log(data.sessionToken)
            console.log(data)
        })
        

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    adminKey = (e) => {
        if (e === "password"){
            this.setState({role: 'admin'})
        }else{
            this.setState({role: 'user'})
        }
        console.log(this.state.role)
    }
    render() { 
        return ( 
        <div>
            <form onSubmit={this.completeRegister}>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => this.handleChange(e)} name="email" value={this.state.email}  placeholder="Email" type="text"/>
                    {/* <br /> */}
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => this.handleChange(e)} name="username" value={this.state.username}  placeholder="Username" type="text"/>
                    {/* <br /> */}
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => this.handleChange(e)} name="password" value={this.state.password} placeholder="Password" type="text"/>
                    {/* <br /> */}
                    <Label htmlFor="role">Do you have an Admin Key? </Label>
                    <Input onChange={(e) => this.adminKey(e.target.value)} placeholder="Admin Key" type="text"/>
                    {/* <br /> */}
                    <Button type="submit">Register</Button>
                    <br />
                    {/* <p>Don't have an account? <a href="/signup" onClick={props.switchToSignup}>Signup</a></p> */}

            </form>
        </div> );
    }
}
 
export default Register;