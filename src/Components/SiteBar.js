import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import Merch from "./Merch";
import { Redirect } from "react-router";
import '../App.css'
import About from "./About";

// import {
//   Div,
//   HeaderText,
//   ListTable,
//   NavBarText,
// } from "../StyledComponents/text.style";

class SiteBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false, posting: [], merchandise: [] };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  componentDidMount = (e) => {
    this.fetchPosts();
    this.fetchMerchPosts();
  };

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

  render() {
    return (
      <div className="NavBar">
        <BrowserRouter>
        <div className="LeftSide">
            <Link className="Title" to='/About'>Grave Robber!</Link>
            <Link className="Links" to="/Home">Home!</Link>
            <Link className="Links" to="/Post">Posts!</Link>      
            <Link className="Links" to="/Merch">Merch Table!</Link>
          
        </div>
        
          <div>
            <Switch>
              <Route exact path="/Merch">
                <Merch
                  merchandise={this.state.merchandise}
                  fetchMerchPosts={this.fetchMerchPosts}
                />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              <Route exact path="/Post">
                <Post
                  posting={this.state.posting}
                  fetchPosts={this.fetchPosts}
                />
              </Route>
              <Route exact path="/Home">
                <Home />
              </Route>
              <Redirect to="/Home" />
            </Switch>
          </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default SiteBar;
