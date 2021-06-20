import React, { Component } from 'react';
import Test6Sub from './Test6Sub';

class Test6 extends Component {
    state = {
        name : 'test',
        age : 10
    }
    handleClick1 = () => {
        this.setState({
            name : 'Anna',
            age : 23
        })
    }
    handleClick2 = () => {
        this.setState({
            name : 'sub1',
            age : 23
        })
    }
    handleClick3 = () => {
        this.setState({
            name : 'sub2',
            age : 30
        })
    }
    render() {
        const {name,age} = this.state
        return (
            <div>
                <h1>Test6 : {name}/ {age}</h1>
                <button onClick={this.handleClick1}>confirm</button>
                <hr/>

                <Test6Sub
                    onName = {this.state.name}
                    onAge = {this.state.age}
                    onHandle = {this.handleClick2}
                    onHandle3 = {this.handleClick3}
                />
            </div>
        );
    }
}

export default Test6;