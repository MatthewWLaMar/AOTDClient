import React, { Component } from 'react';
import MerchIndex from './MerchIndex';
import MerchCreate from './MerchCreate';

class Merch extends Component {
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
 
export default Merch;