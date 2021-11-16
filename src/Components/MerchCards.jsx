import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  Button,
  CardDeck,
  CardTitle,
  CardGroup,
} from "reactstrap";
import "../App.css";

class MerchCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      merchTitle: "",
      image: "",
      description: "",
      price: "",
      hyperlink: "",
    };
  }

  deleteMerch = (merchandise) => {
    let token = localStorage.getItem("token");
    fetch(`http://localhost:3000/merchandise/${merchandise.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    }).then(() => this.props.fetchMerch());
  };

  merchMapper = () => {
    return this.props.merchandise.map((merchandise, index) => {
      console.log(merchandise.owner_id);

      return (
        <div>
          {merchandise.owner_id.toString() === localStorage.getItem("ID") &&
            this.props.updateMerchFeed === "mine"}
          <CardGroup className="merchContainer">
            <Card className="merchChild" key={[index]}>
              <CardBody>
                <CardTitle>{merchandise.merchTitle}</CardTitle>
                <CardImg
                  top
                  width="100%"
                  src={merchandise.image}
                  alt='There should be merch here'
                />
                <CardText>{merchandise.description}</CardText>
                <CardText>
                  ${merchandise.price}
                </CardText>
                <CardText>
                  {merchandise.hyperlink}
                </CardText>
                {localStorage.getItem("role").toString() === "admin" ? (
                  <Button
                    color="warning"
                    onClick={() => {
                      this.props.updateOn();
                      this.props.editUpdateMerchPost(merchandise);
                    }}
                  >
                    {" "}
                    Edit{" "}
                  </Button>
                ) : null}
                {localStorage.getItem("role").toString() === "admin" ? (
                  <Button
                    color="warning"
                    onClick={() => {
                      this.deleteMerch(merchandise);
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
    console.log(this.props.merchandise);
    return (
      <div>
        <CardDeck>{this.merchMapper()}</CardDeck>
      </div>
    );
  }
}

export default MerchCards;
