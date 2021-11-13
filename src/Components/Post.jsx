import React, { Component } from 'react';
import PostIndex from './PostIndex';
import PostCreate from './PostCreate';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <PostCreate/>
            <PostIndex posting={this.props.posting} fetchPosts={this.props.fetchPosts}/>
        </div> );
    }
}
 
export default Post;