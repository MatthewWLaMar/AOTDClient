import React, { Component } from 'react';
import Login from '../Register/Login';
import Register from '../Register/Register';
import '../App.css'
import styled from 'styled-components';
import { HomeBackground } from '../StyledComponents/background.styled';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
        
        <div className='home'>
            {/* <p className='homeText'>Join the Army of the Dead!</p> */}
            <Register />
            
            {/* <p className='homeText'>Already a member? Login!</p> */}
            <Login />

        </div> 
        );
    }
}
 
export default Home;