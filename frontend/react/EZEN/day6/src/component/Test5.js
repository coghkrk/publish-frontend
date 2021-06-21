import React, { Component } from 'react';

class Test5 extends Component {
    state = {
        userName : '',
        userAge : ''
    }
    change = (e) => {
        const {name,value} = e.target
        this.setState({
            [name] : value
        })
    }
    reset = () => {
        this.setState({
            userName : '',
            userAge :''
        })
    }
    render() {
        const {userName,userAge} = this.state
        return (
            <div>
                <p> name : <input type="text" name="userName" onChange={this.change} value={userName}/> </p>
                <p> age : <input type="text" name="userAge" onChange={this.change} value={userAge}/> </p>
                <button onClick={this.reset}>reset</button>
                <h3>name : {userName}</h3>
                <h3>age : {userAge}</h3>
            </div>
        );
    }
}

export default Test5;