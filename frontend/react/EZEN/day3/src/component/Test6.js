import React, { Component } from 'react';
import '../Test6.css'

class Test6 extends Component {
    state = {
        done : false,   
    }
    handleClick1 = () => {
        this.setState({
            done : true,
        })
    }
    handleClick2 = () => {
        this.setState({
            done : false,
        })
    }
    handleClick3 = () => {
        this.setState({
            done : !this.state.done ,
        })
    }
    render() {
        const {done} = this.state
        return (
            <div className="Test6">
                <h1>{done}</h1>
                <p>this is test</p>
                <p className="item">this is test</p>
                <p className="item on">this is test</p>
                <p className={done === true ? 'on' : null}>this is test</p>
                <p className={done && 'on'}>this is test</p>
                <p>
                    <button onClick={this.handleClick1}>add class</button>
                    <button onClick={this.handleClick2}>remove class</button>
                    <button onClick={this.handleClick3}>toggle class</button>
                </p>
            </div>
        );
    }
}

export default Test6;