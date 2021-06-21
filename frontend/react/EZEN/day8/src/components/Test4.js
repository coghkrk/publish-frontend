import React, { Component } from 'react';

class Test4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
        this.handleUp = this.handleUp.bind(this)
        this.handleDown = this.handleDown.bind(this)
        console.log('1. constructor');
    }
    handleUp = () => {
        const {count} = this.state
        this.setState({
            count : count + 1
        })
    }
    handleDown = () => {
        const {count} = this.state
        this.setState({
            count : count - 1
        })
    }
    componentDidMount() {
        console.log('3.componentDidMount');
    }
    componentDidUpdate(prevProps,prevState){
        console.log('4.componentDidUpdate');
    }
    render() {
        console.log('2.render')
        const {count} = this.state
        return (
            <div>
                <button onClick={this.handleUp}>+</button>
                <button onClick={this.handleDown}>-</button>
                <h2>num :{count} </h2>
            </div>
        );
    }
}

export default Test4;