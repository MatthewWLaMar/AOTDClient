import PostCards from "./PostCards";
import PostCreate from "./PostCreate";
import EditPost from "./EditPost";
import React, {Component } from 'react';
import {Row, Col} from 'reactstrap'
import '../App.css'


class PostIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { updateActive: false, posting: [], postingToUpdate: {}}
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
    
    fetchPosts = () => {
        let token = localStorage.getItem("token");
            fetch("http://localhost:3000/posting", {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: token,
          }),
        })
          .then((res) => res.json())
          .then((logData) => {
            console.log(logData);
            this.setState({ posting: logData });
          });
      };
      componentDidMount = () => {
        this.fetchPosts();
        // this.fetchMerchPosts();
      };
 
    render() { 
        return ( 
        <div className='postContainer'>
            <Col className='cardColum'>
                <Row className='cardRow'>
                <PostCreate fetchPosts={this.fetchPosts} token={this.props.token}/>
                </Row>
                <Row>
                <PostCards posting={this.state.posting} fetchPosts={this.fetchPosts} editUpdatePost={this.editUpdatePost} updateOn={this.updateOn} token={this.token}/>
                </Row>
                
                {this.state.updateActive ? <EditPost postingToUpdate={this.state.postingToUpdate}  updateOff={this.updateOff} token={this.props.token} fetchPosts={this.fetchPosts}/> : <></>} 
                
            </Col>
        </div>);
    }
}
 
export default PostIndex;