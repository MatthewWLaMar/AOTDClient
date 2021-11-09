import React, {Component } from 'react';
import styled from "styled-components"
import {Card, CardBody, CardImg, CardText, CardColumns, CardDeck} from 'reactstrap'

class PostCards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    postingMapper = () =>{
        return this.state.postings.map((posting, index) => {
            console.log(posting.owner_id)
            this.setState(posting)
            return(
                <div>
                <CardColumns>
                    <Card>
                        <CardImg>
                        {this.state.image}
                        </CardImg>
                        <CardBody key ={[index]}>
                            <CardText>
                            {this.state.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </CardColumns>
                
                </div>
            )
        })
        
    }
    
    

    render() { 
        console.log(this.props.postings)
        return ( 
        <div>
            <CardColumns>
                    <Card>
                        {/* <CardImg>
                        image here
                        </CardImg> */}
                        <CardBody>
                            <CardText>
                            text here
                            </CardText>
                        </CardBody>
                    </Card>
                </CardColumns>
            {/* <Card>hello{this.postingMapper}</Card>        */}
        </div> );
    }
}
 
export default PostCards;
