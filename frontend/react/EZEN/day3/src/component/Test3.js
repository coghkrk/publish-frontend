import React, { Component } from 'react';

class Test3 extends Component {
    handleClick1 = () => {
        alert('test1')
    }
    handleClick2 = () => {
        alert('test2')
    }
    handleClick3 = () => {
        alert('test3')
    }
    handleClick4 = (num1, num2) => {
        alert(num1 + num2)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick1}>confirm</button>
                <button onClick={this.handleClick2}>confirm</button>
                <button onClick={this.handleClick3}>confirm</button>
                <br/>
                <br/>
                <button onClick={
                    () => {
                        alert('callBack function')
                    }
                }>confirm</button>
                <br/>
                <br/>
                <button onClick={this.handleClick4(10,20)}>confirm</button>
            </div>
        );
    }
}

export default Test3;