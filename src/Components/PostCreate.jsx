import React, { Component } from 'react';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = { description:"", image: "" }
    }
    createPost = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/posting', {
            method: 'POST',
            body: JSON.stringify({post:{description: this.state.description, image: this.state.image}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((response) => response.json())
        .then((logData) => {
            console.log(logData)
            this.state.
        })
    }

    render() { 
        return (  );
    }
}
 
export default Create;
