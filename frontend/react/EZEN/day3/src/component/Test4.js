import React, { Component } from 'react';

class Test4 extends Component {
    state = {
        name :'Anna',
        age : 10,
        addr : 'Seoul',
        color: 'green'
    }
    handleClick1 = () => {
        this.setState({
            name : 'Tom',
            age : 30,
            addr : 'Jeju',
            color: 'red'
        })
    }
    handleClick2 = () => {
        this.setState({
            name : 'Jhon',
            age : 32,
            addr : 'Gwangju',
            color: 'pink'
        })
    }
    handleClick3 = () => {
        this.setState({
            name : 'Jain',
            age : 24,
            addr : 'Busan',
            color: 'yellow'
        })
    }
    render() {
        const name = "Anna"
        return (
            <div style={{  
                backgroundColor:this.state.color,
            }}>
                <h2>name : {this.state.name}</h2>
                <h2>age : {this.state.age}</h2>
                <h2>addr : {this.state.addr}</h2>
                <button onClick={this.handleClick1}>confirm</button>
                <button onClick={this.handleClick2}>confirm</button>
                <button onClick={this.handleClick3}>confirm</button>
            </div>
        );
    }
}

export default Test4;