import React, { Component } from 'react';

class Test5 extends Component {
    state = {
        name : '',
        age : 0 ,
        color : 'red'
    }
    handleClick1 = () => {
        this.setState({
            name : 'Anna',
            age : 20,
            color : 'blue'
        })
    }
    handleClick2 = () => {
        this.setState({
            name : 'Tom',
            age : 30,
            color : 'green'
        })
    }
    handleClick3 = () => {
        this.setState({
            name : 'Jhon',
            age : 40,
            color : 'pink',
        })
    }
    handleReset = () => {
        this.setState({
            name :'',
            age : 0 ,
            color : 'purple'
        })
    }

    render() {
        return (
            <div>
                <h2 style={{color:this.state.color}}>
                    { this.state.name }/
                    { this.state.age}
                </h2>
                <p>
                    <button onClick={this.handleClick1}>confirm1</button>
                    <button onClick={this.handleClick2}>confirm2</button>
                    <button onClick={this.handleClick3}>confirm3</button>
                    <br/>
                    <br/>
                    <button onClick={this.handleReset}>reset1</button>
                </p>
                <button onClick = {
                    () => {
                       this.setState({
                        name : '',
                        age : 0,
                        color : '#000'
                       })
                    }
                }>reset2</button>
            </div>
        );
    }
}

export default Test5;