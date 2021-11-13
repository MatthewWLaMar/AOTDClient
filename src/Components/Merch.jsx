import React, { Component } from 'react';
import MerchIndex from './PostIndex';
import MerchCreate from './PostCreate';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <MerchCreate/>
            <MerchIndex merchandise={this.props.merchandise} fetchMerchPosts={this.props.fetchMerchPosts}/>
        </div> );
    }
}
 
export default Post;