import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count + 1);
    }
    
    render() {
        return(
        <div>
            <p>Reactive Button Counter</p>
            <button onClick={this.increment}>Increment</button>
            <p>{this.state.count}</p>
        </div>
        
        
        
        
        );}

    
}

export default Counter;