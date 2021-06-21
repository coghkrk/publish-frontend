import React, { Component } from 'react';

class Test5 extends Component {
    state = {
        color : '#f00',
        done : false
    }
    handleColor = () => {
        const {color} = this.state
        this.setState({
            color : '#'+ Math.floor(Math.random() * 16777215).toString(16)
        })
    }
    handleToggle = () => {
        const {done} = this.state
        this.setState({
            done : !done
        })
    }
    render() {
        const {color,done} = this.state
        return (
            <div>
                <button onClick={this.handleColor}>random color</button>
                <button onClick={this.handleToggle}>show / hide</button>
                <h2 style={{color:color}}>color</h2>
                <hr/>
                {
                    done && <Visible
                        color = {color}
                    />    
                }
            </div>
        );
    }
}
class Visible extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
        this.up = this.up.bind(this)
        this.down = this.down.bind(this)

        console.log('1.constructor');
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        return nextState.count % 5 !== 0
    }
    /*
    shouldComponentUpdate(nextProps,nextState){
        return true
    }
    */
    up = () => {
        const {count} = this.state
        this.setState({
            count : count + 1
        })
    }
    down = () => {
        const {count} = this.state
        this.setState({
            count : count - 1
        })

    }
    componentWillUnmount() {
        console.log('5.componentWillUnmount');
    }
    componentDidMount() {
        console.log('3.componentDidMount');
    }
    componentDidUpdate() {
        console.log('4.componentDidUpdate');
    }
    render() {
        console.log('2.render');
        const {count} = this.state
        const {color} = this.props
        return (
            <div>
                <h1 style={{color:color}}>child component : {count}</h1>
                <button onClick={this.up}>+</button>
                <button onClick={this.down}>-</button>
            </div>
        );
    }
}

export default Test5;