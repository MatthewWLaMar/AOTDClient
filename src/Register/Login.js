import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Modal, Input, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
// import styled from "styled-components"
import '../App.css'
import APIURL from '../helpers/enviroment';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" }
        this.toggle = this.toggle.bind(this);
    }
toggle() {
    this.setState({
        modal: !this.state.modal
    })
}

    completeLogin = (event) => {
        event.preventDefault()
        fetch(`${APIURL}/user/login`,{
            method: 'POST',
            body: JSON.stringify({user:{username: this.state.username, passwordhash: this.state.password}}),
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
            <div className='theRegisterButton'>
            <Button classname='registerButton'onClick={this.toggle}> Login </Button>
            <Modal isOpen={this.state.modal}>
                <Form onSubmit={this.completeLogin}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input onChange={(e) => this.handleChange(e)} name="username" value={this.state.username}  placeholder="Username" type="text"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input onChange={(e) => this.handleChange(e)} name="password" value={this.state.password} placeholder="Password" type="text"/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle} type="button">Cancel</Button>
                        <Button type="submit" onClick={this.toggle}>Login</Button>
                    </ModalFooter>
                    </Form>
            </Modal>
            </div>
        );
    }
}
 
export default Login;