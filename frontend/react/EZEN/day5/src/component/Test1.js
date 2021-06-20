import React, { Component } from 'react';
import Test1Sub from './Test1Sub';

class Test1 extends Component {
    state = {
        message : 'hello world!'
    }
    handleClick1 = () => {
        alert('confirm')
    }
    handleClick2 = () => {
        this.setState({
            message : 'goodbye world!'
        })
    }
    handleClick3 = (num) => {
        alert(num)
    }
    handleClick4 = (num) => {
        alert(num)
    }
    render() {
        const {message} = this.state
        return (
            <div>
                <h1>top</h1>
                <hr/>
                <Test1Sub 
                    msgSub = {message}
                    handleClickSub = {this.handleClick1}
                    handleClick2Sub = {this.handleClick2}
                    Click3 = {this.handleClick3}
                    Click4 = {this.handleClick4}
                />
            </div>
        );
    }
}

export default Test1;