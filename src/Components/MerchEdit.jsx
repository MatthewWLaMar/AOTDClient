import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Modal, Input, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'


class EditMerchPost extends Component {
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
   
    editMerchPost = (posting) => {
        let token = localStorage.getItem('token')
        // event.preventDefault()
        fetch(`http://localhost:3000/merchandise/update/${this.props.postingToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify(
                {merchandise:{
                merchTitle: this.state.merchTitle, 
                image: this.state.image,
                description: this.state.description,
                price: this.state.price,
                hyperlink: this.state.hyperlink
            }}),
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
                <Button onClick={this.toggle}>Edit Merchandise</Button>
                <Modal isOpen={true}>
                    <Form onSubmit={this.editPost}>
                    <ModalHeader>Merchandise</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label htmlFor="Title"> Title: </Label>
                                <Input onChange={(e) => this.setState({merchTitle: e.target.value})} type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="Image"/>
                                
                                <Input onChange={this.uploadImage} name="file" type="file"/>
                                <br />
                                <img src={this.image}style={{width: "300px"}} alt="pic is here"/> 
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="Description"> Description: </Label>
                                <Input onChange={(e) => this.setState({description: e.target.value})} type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="Title"> Price: </Label>
                                <Input onChange={(e) => this.setState({price: e.target.value})} type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="Title"> Link: </Label>
                                <Input onChange={(e) => this.setState({hyperlink: e.target.value})} type="text"/>
                            </FormGroup>
                            </ModalBody>
                        <ModalFooter>
                            {this.state.loading ? <Button type="submit" onClick={this.toggle}>Submit</Button> : <></>}
                            <Button onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
         );
    }
}
 
export default EditMerchPost;