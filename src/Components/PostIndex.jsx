import PostCards from "./PostCards";
import PostCreate from "./PostCreate";
import EditPost from "./EditPost";
import React, {Component } from 'react';
import {Row, Col} from 'reactstrap'


class PostIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { updateActive: false, postings: [], postingToUpdate: {}}
    }
    editUpdatePost = (posting) => {
        this.setState({postingToUpdate: posting})
        console.log(posting)
    }
    updateOn = () => {
        this.setState({updateActive: true})
        console.log(this.state.updateActive)
    }
    updateOff = () => {
        this.setState({updateActive: false})
    }
 
    render() { 
        return ( <div>
            <Row>
                <Col> This is the Index
                <PostCreate fetchPosts={this.state.fetchPosts} token={this.props.token}/>
                </Col>
                <Col>
                <PostCards posting={this.props.posting} fetchPosts={this.props.fetchPosts} editUpdatePost={this.editUpdatePost} updateOn={this.updateOn} token={this.token}/>
                </Col>
                
                {this.state.updateActive ? <EditPost postingToUpdate={this.state.postingToUpdate}  updateOff={this.updateOff} token={this.props.token} fetchPosts={this.fetchPosts}/> : <></>} 
                
            </Row>
        </div> );
    }
}
 
export default PostIndex;