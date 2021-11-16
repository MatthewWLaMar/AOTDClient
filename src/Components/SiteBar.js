import React from "react";
import {Link, BrowserRouter } from "react-router-dom";
import '../App.css'

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
  




  

  render() {
    return (
      <div className="NavBar">
        <div className="LeftSide">
          <BrowserRouter>
            <Link className="Title" to='/About'>Grave Robber!</Link>
            <Link className="Links" to="/Home">Home!</Link>
            <Link className="Links" to="/PostIndex">Posts!</Link>      
            <Link className="Links" to="/MerchIndex">Merch Table!</Link>
            </BrowserRouter>
          </div>
        </div>
        
          
    );
  }
}

export default SiteBar;
