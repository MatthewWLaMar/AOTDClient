import PostCards from "./PostCards";
import PostCreate from "./PostCreate";
import EditPost from "./EditPost";
import React, { useEffect, Component } from 'react';
import {Row, Col} from 'reactstrap'


class PostIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { updateActive: false, postings: ([]) }
    }

    componentDidMount = (e) =>{
        let token = localStorage.getItem('token')
        
        fetch('http://localhost:3000/posting', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token 
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log(logData)
            this.setState({postings: logData})
        })
        
    }


    editUpdatePost = (posting) => {
        this.setState(posting)
        console.log(posting)
    }
    updateOn = () => {
        this.updateActive(true)
    }
    updateOff = () => {
        this.updateActive(false)
    }
 
    render() { 
        return ( <div>
            <Row>
                <Col> Hello
                <PostCreate fetchPosts={this.state.fetchPosts} token={this.token}/>
                </Col>
                <Col>
                    <PostCards postings={this.state.postings} fetchPosts={this.state.fetchPosts} editUpdatePost={this.state.editUpdatePost} updateOn={this.state.updateOn} token={this.token}/>
                </Col>
            </Row>
        </div> );
    }
}
 
export default PostIndex;