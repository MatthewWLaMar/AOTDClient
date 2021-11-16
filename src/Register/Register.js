import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Modal, Input, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
// import styled from "styled-components"
import '../App.css'
import APIURL from '../helpers/enviroment';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false, username: "", email:"", password: "", role: "" }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }
    
    completeRegister = (event) => {
        event.preventDefault()
        fetch(`${APIURL}/user/create`,{
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
        <div className='theRegisterButton'>
            <Button className="RegisterButton" onClick={this.toggle}> Register </Button>
            <Modal isOpen={this.state.modal}>
                <Form onSubmit={this.completeRegister}>
                    <ModalHeader>Register</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input onChange={(e) => this.handleChange(e)} name="email" value={this.state.email}  placeholder="Email" type="text"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input onChange={(e) => this.handleChange(e)} name="username" value={this.state.username}  placeholder="Username" type="text"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input onChange={(e) => this.handleChange(e)} name="password" value={this.state.password} placeholder="Password" type="text"/>
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="role">Do you have an Admin Key? </Label>
                        <Input onChange={(e) => this.adminKey(e.target.value)} placeholder="Admin Key" type="text"/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle} type="button">Cancel</Button>
                        <Button type="submit" onClick={this.toggle}>Register</Button>
                    </ModalFooter>
                    </Form>
            </Modal>
        </div> );
    }
}
 
export default Register;