import React, { Component, MouseEvent } from 'react';

class Welcome extends Component {
    
    state = {
        name: "User"
    };

    updateName = () => {
        
        this.setState({ name: document.getElementById("user").value });
    }
    
    render() {
        
        return(
        <div>
            <input type="text" placeholder="Name" name="user" id="user" onSubmit={this.preventDefault} onChange={this.updateName} />
            <p>Welcome, {this.state.name}</p>
        </div>
        
        
        
        
        );}

    
}

export default Welcome;