import React, { Component } from 'react';

class Test4 extends Component {
    state = {
        userId : '',
        userPw : '',
        userEmail : ''
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    reset = () => {
        this.setState({
            userId : '',
            userPw : '',
            userEmail : ''
        })
    }
    render() {
        return (
            <div>
                <p>
                    <input typ="text" name='userId' value={this.state.userId} onChange={this.handleChange}/>
                    <input typ="text" name='userPw' value={this.state.userPw} onChange={this.handleChange}/>
                    <input typ="text" name='userEmail' value={this.state.userEmail} onChange={this.handleChange}/>
                    <br/>
                    <button onClick={this.reset}>reset</button>
                </p>
                <h2>Id : {this.state.userId}</h2>
                <h2>Pw : {this.state.userPw}</h2>
                <h2>E-mail : {this.state.userEmail}</h2>
            </div>
        );
    }
}

export default Test4;