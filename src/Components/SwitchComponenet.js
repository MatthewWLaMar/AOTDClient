import React, { Component } from 'react';
import { Switch } from 'react-router';
import {Route, Redirect} from 'react-router-dom';
import '../App.css'
import About from './About';
import Home from './Home';
import MerchIndex from './MerchIndex';
import PostIndex from './PostIndex';

class SwitchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
        <div className='AboutSection'>
            <div className="AboutText">
            <div>

            <Switch> 
              <Route path="/MerchIndex">
                <MerchIndex
                  merchandise={this.state.merchandise}
                  fetchMerchPosts={this.fetchMerchPosts}
                />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              <Route exact path="/PostIndex">
                <PostIndex
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
            </div>
        </div> );
    }
}
 
export default SwitchComponent;