import React, { Component } from 'react';

class Test1 extends Component {
    state = {
        name : 'name',
    }
    handleClick1 = () => {
        this.setState({
            name : 'puppy'
        })
    }
    handleClick2 = () => {
        this.setState({
            name : 'puppy1'
        })
    }
    handleClick3 = () => {
        this.setState({
            name : 'puppy2'
        })
    }
    handleClick4 = (a,b) => {
        alert(a+b)
    }
    render() {
        const {name} = this.state
        return (
            <div>
                <h1>Dog name : {name}</h1>
                <button onClick = {this.handleClick1}>confirm</button>
                <button onClick = {this.handleClick2}>confirm</button>
                <button onClick = {this.handleClick3}>confirm</button>
                <br/>
                <br/>
                <button onClick ={
                    () => {
                        this.setState({
                            name : 'puppy4'
                        })
                    }
                }>callBack function</button>
                <hr/>
                <button onClick={
                    () => this.handleClick4(10,30)
                    //눈치보니 괄호 없이 함수를 써야 매개값이 처리 되는듯 
                }>10,30 매개값 처리</button>
            </div>
        );
    }
}

export default Test1;