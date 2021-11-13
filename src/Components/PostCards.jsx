import React, {Component } from 'react';
import styled from "styled-components"
import {Card, CardBody, CardImg, CardText, CardColumns, Button, CardDeck} from 'reactstrap'




class PostCards extends Component {
    constructor(props) {
        super(props);
        this.state = {modal: false, description:"", image: "" }
        
    }
    
    deletePosting = (posting) => {
        let token = localStorage.getItem('token') 
        fetch(`http://localhost:3000/posting/${posting.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': token
            })
        }).then(() => this.props.fetchPosts())
    }
    
 

    postingMapper = () =>{
        return this.props.posting.map((posting, index) => {
            console.log(posting.owner_id)
            
            return(
                <div>
                    { (posting.owner_id.toString() === localStorage.getItem('ID') && this.props.updatePostFeed === 'mine')}
                <CardColumns>
                    <Card key ={[index]}>
                        <CardImg
                        top
                        width='100%'
                        src={posting.image}
                        alt="Some cool Graverobber picture should be here"
                        />
                        <CardBody>
                            <CardText>
                            {posting.description}
                            </CardText>
                            {localStorage.getItem('ID') === posting.owner_id.toString() ? <Button color="warning" onClick={() => {this.props.updateOn(); this.props.editUpdatePost(posting)}}> Edit </Button> : null}
                            
                            {localStorage.getItem('ID') === posting.owner_id.toString() ? <Button color="danger" onClick={() => {this.deletePosting(posting)}}>Delete</Button> : null}
                            {localStorage.getItem('role').toString() === 'admin' ? <Button color="warning" onClick={() => {this.deletePosting(posting)}}>Admin Delete</Button> : null}
                            <Button color="danger" onClick={() => {this.deletePosting(posting)}}>Delete</Button>
                        </CardBody>
                    </Card>
                </CardColumns>
                </div>
            )
        })
        
    }
    
    

    render() { 
        console.log(this.props.posting)
        return ( 
        <div>
            <CardDeck>
            {this.postingMapper()}
            </CardDeck>
        </div> );
    }
}
 
export default PostCards;