import React, { Component } from 'react';
import grlogo from '../StyledComponents/grlogo.png' 
import '../App.css'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='AboutSection'>
            <img classname='logoIMG' src={grlogo} alt='logo'/>
            <div className='aboutDiv'>
                <p className="AboutText">
                Welcome to Army of the Dead, a fansite for Grave Robber! Grave
            Robber, a Christian horror-punk band from Fort Wayne, Indiana, have
            been bringing their unique brand of punk to the masses since October
            of 2005. Comprised of vocalist Wretched, bassist Carcass, drummer
            Plague and guitarists Viral and Grimm, these undead punk rockers
            invite you to join their fans in the ARMY OF THE DEAD!
                </p>
            </div>
        </div> );
    }
}
 
export default About;