import MerchCards from "./MerchCards";
import MerchCreate from "./MerchCreate";
import MerchEdit from "./MerchEdit";
import React, { Component } from "react";
import { Row, Col, CardGroup } from "reactstrap";

class MerchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateActive: false,
      merchandise: [],
      merchandiseToUpdate: {},
    };
  }
  editUpdateMerchPost = (merchandise) => {
    this.setState({ merchandiseToUpdate: merchandise });
    console.log(merchandise);
  };
  updateOn = () => {
    this.setState({ updateActive: true });
    console.log(this.state.updateActive);
  };
  updateOff = () => {
    this.setState({ updateActive: false });
  };

  fetchMerchPosts = () => {
    let token = localStorage.getItem("token");
    fetch("http://localhost:3000/merchandise/", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        this.setState({ merchandise: logData });
      });
  };
  componentDidMount = () => {
    // this.fetchPosts();
    this.fetchMerchPosts();
  };

  render() {
    return (
      <div className="merchIndexDiv">
        <Col className="cardColumn">
          <div className="cardRow">
            <MerchCreate
              fetchMerchPosts={this.fetchMerchPosts}
              token={this.props.token}
            />
          </div>
          <CardGroup className="cardGroup">
            <MerchCards
              merchandise={this.state.merchandise}
              fetchMerchPosts={this.fetchMerchPosts}
              editUpdateMerchPost={this.editUpdateMerchPost}
              updateOn={this.updateOn}
              token={this.token}
            />
          </CardGroup>

          {this.state.updateActive ? (
            <MerchEdit
              merchandiseToUpdate={this.state.merchandiseToUpdate}
              updateOff={this.updateOff}
              token={this.props.token}
              fetchMerchPosts={this.fetchMerchPosts}
            />
          ) : (
            <></>
          )}
        </Col>
      </div>
    );
  }
}

export default MerchIndex;
