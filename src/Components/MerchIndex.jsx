import MerchCards from "./MerchCards";
import MerchCreate from "./MerchCreate";
import MerchEdit from "./MerchEdit";
import React, {Component } from 'react';
import {Row, Col} from 'reactstrap'


class MerchIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { updateActive: false, merchandise: [], postingToUpdate: {}}
    }
    editUpdateMerchPost = (merchandise) => {
        this.setState({merchandiseToUpdate: merchandise})
        console.log(merchandise)
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
                <MerchCreate fetchMerchPosts={this.state.fetchMerchPosts} token={this.props.token}/>
                </Col>
                <Col>
                There should be cards here
                <MerchCards merchandise={this.props.merchandise} fetchMerchPosts={this.props.fetchMerchPosts} editUpdateMerchPost={this.editUpdateMerchPost} updateOn={this.updateOn} token={this.token}/>
                </Col>
                
                {this.state.updateActive ? <MerchEdit merchandiseToUpdate={this.state.merchandiseToUpdate}  updateOff={this.updateOff} token={this.props.token} fetchMerchPosts={this.fetchMerchPosts}/> : <></>} 
                
            </Row>
        </div> );
    }
}
 
export default MerchIndex;