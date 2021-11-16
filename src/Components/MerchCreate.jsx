import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Modal, Input, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import APIURL from '../helpers/enviroment';

class MerchCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false, merchTitle:"", image: "", description: "", price: "", hyperlink: "" }
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
   
    createMerchPost = (event) => { 
        let token = localStorage.getItem('token')   
        // event.preventDefault()
        fetch(`${APIURL}/merchandise/`, {
            method: 'POST',
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
                {localStorage.getItem('role') === 'admin' ? <Button onClick={this.toggle} className='merch-button'>Upload Merchandise</Button> : null}
                {/* <Button onClick={this.toggle}>Create Merchandise</Button> */}
                <Modal isOpen={this.state.modal}>
                    <Form onSubmit={this.createMerchPost}>
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
                                <Label htmlFor="Description"> Description of Item: </Label>
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
 
export default MerchCreate;