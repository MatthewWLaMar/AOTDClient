import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Modal, Input, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'


class EditPost extends Component {
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
   
    editPost = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/posting/posting', {
            method: 'POST',
            body: JSON.stringify({post:{description: this.state.description, image: this.state.image}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': this.props.token
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
                                <Input onChange={(e) => this.setState({ name : e.target.value})} name="Description" placeholder="Description" type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="Image"/>
                                <Input onChange={(e) => this.setState({ name : e.target.value})} name="Image" placeholder="Image" type="text"/>
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
 
export default EditPost;