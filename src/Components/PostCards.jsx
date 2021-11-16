import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardGroup,
  CardColumns,
  Button,
  CardDeck,
} from "reactstrap";
import "../App.css";

class PostCards extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, description: ""};
  }

  deletePosting = (posting) => {
    let token = localStorage.getItem("token");
    fetch(`http://localhost:3000/posting/${posting.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    }).then(() => this.props.fetchPosts());
  };

  adminDeletePosting = (posting) => {
    let token = localStorage.getItem("token");
    fetch(`http://localhost:3000/posting/admin/${posting.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    }).then(() => this.props.fetchPosts());
  };

  postingMapper = () => {
    return this.props.posting.map((posting, user, index) => {
      console.log(posting.owner_id);

      return (
        <div className="cardContainer">
          {posting.owner_id.toString() === localStorage.getItem("ID") &&
            this.props.updatePostFeed === "mine"}
          <CardGroup className="merchContainer">
            <Card className="merchChild" key={[index]}>
              <CardBody>
              <CardImg style={{width: '100%'}}
              top width="100%" src={posting.image} alt="IMAGE" />
              
                <CardText>{posting.description}</CardText>
                {localStorage.getItem("ID") === posting.owner_id.toString() ? (
                  <Button
                    color="warning"
                    onClick={() => {
                      this.props.updateOn();
                      this.props.editUpdatePost(posting);
                    }}
                  >
                    {" "}
                    Edit{" "}
                  </Button>
                ) : null}
                {localStorage.getItem("role") === "admin" ? (
                  <Button
                    color="danger"
                    onClick={() => {
                      this.adminDeletePosting(posting);
                    }}
                  >
                    Admin Delete
                  </Button>
                ) : null}
                {localStorage.getItem("ID") === posting.owner_id.toString() ? (
                  <Button
                    color="danger"
                    onClick={() => {
                      this.deletePosting(posting);
                    }}
                  >
                    Delete
                  </Button>
                ) : null}
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      );
    });
  };

  render() {
    console.log(this.props.posting);
    return (
      <div>
        <CardDeck>{this.postingMapper()}</CardDeck>
      </div>
    );
  }
}

export default PostCards;
