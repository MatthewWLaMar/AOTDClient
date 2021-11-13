import React from 'react';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
   } from 'react-router-dom'
import Home from './Home';
import Post from './Post';
import Merch from './Merch';
import { Redirect } from 'react-router-dom';

class SiteBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  posting:[], merchandise: []}
    }

    componentDidMount = (e) =>{
      this.fetchPosts()
      this.fetchMerchPosts() 
    }
    
    fetchPosts = () => {
        let token = localStorage.getItem('token')
        
        fetch('http://localhost:3000/posting', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token 
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log(logData)
            this.setState({posting: logData})
        })
    }
    fetchMerchPosts = () => {
        let token = localStorage.getItem('token')
        
        fetch('http://localhost:3000/merchandise/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token 
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log(logData)
            this.setState({posting: logData})
        })
    }
    
    render() { 
        return ( 
        <Router>
            <div>
                <Link to='/Post'>Post</Link>
                <br/>
                <Link to='/Home'>Home</Link>
                <br/>
                <Link to='/Merch'>Merch Table</Link>
            </div>
            <div>
                <Switch>
                    <Route exact path='/Merch'><Merch merchandise={this.state.merchandise}fetchMerchPosts={this.fetchMerchPosts}/></Route>
                    <Route exact path='/Post'><Post posting={this.state.posting}fetchPosts={this.fetchPosts}/></Route>
                    <Route exact path='/Home'><Home/></Route>
                    <Redirect to="/Home" />
                </Switch>
            </div>

            
        </Router>
            
            
     );
    }
}
 
export default SiteBar;

