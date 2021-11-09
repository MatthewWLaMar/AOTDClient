import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Modal, Input, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'


class PostCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false, description:"", image: "" }
        this.toggle = this.toggle.bind(this);
        }
    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }
   
    createPost = (event) => { 
        let token = localStorage.getItem('token')   
        event.preventDefault()
        fetch('http://localhost:3000/posting/posting', {
            method: 'POST',
            body: JSON.stringify({posting:{description: this.state.description, image: this.state.image}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': token
            })
        })
        .then((response) => response.json())
        .then((logData) => {
            console.log(logData)
            this.setState()
        })
    }
    handleSubmit = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        return ( 
            <div>
                <Button onClick={this.toggle}>Create Post</Button>
                <Modal isOpen={this.state.modal}>
                    <Form onSubmit={this.handleSubmit}>
                        <ModalHeader>Your Post</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label htmlFor="Description"/>
                                <Input onChange={(e) => this.handleSubmit(e)} name="description" value={this.state.description} placeholder="Description" type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="Image"/>
                                <Input onChange={(e) => this.handleSubmit(e)} name="image" value={this.state.image} placeholder="Image" type="text"/>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" onClick={this.createPost}>Submit</Button>
                            <Button onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
         );
    }
}
 
export default PostCreate;
