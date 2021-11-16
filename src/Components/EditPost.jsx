import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Modal, Input, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import APIURL from '../helpers/enviroment';

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false, description:"" }
        this.toggle = this.toggle.bind(this);
        }
    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }
    uploadImage = async (event) => {
        const files = event.target.files 
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'ArmyOfTheDead') 
        const res = await fetch (
            "https://api.cloudinary.com/v1_1/dmvbiwqqd/image/upload",{
                method: 'POST',
                body: data,
            }
        )
        const File = await res.json()
        console.log(File.secure_url)
        await this.setState({image: File.secure_url})
        await this.setState({loading: true})
    }
   
    editPost = (posting) => {
        let token = localStorage.getItem('token')
        // event.preventDefault()
        fetch(`${APIURL}/posting/update/${this.props.postingToUpdate.id}`, {
            method: 'PUT',
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
                <Modal isOpen={true}>
                    <Form onSubmit={this.editPost}>
                        <ModalHeader>Your Post</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label htmlFor="Description"> Description</Label>
                                <Input onChange={(e) => this.setState({description: e.target.value})} type="text"/>
                            </FormGroup>
                            <FormGroup>
                            <Label htmlFor="Image"/>
                                <Input onChange={this.uploadImage} name="file" type="file"/>
                                <br />
                                <img src={this.image}style={{width: "300px"}} alt="pic is here"/> 
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" onClick={this.toggle}>Submit</Button>
                            <Button onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
         );
    }
}
 
export default EditPost;