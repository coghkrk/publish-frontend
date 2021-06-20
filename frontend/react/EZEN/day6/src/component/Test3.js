import React, { Component } from 'react';

class Test3 extends Component {
    state = {
        userNmae : ''
    }
    //event , evt , e 
    handleChange = (e) => {
        this.setState({
            userNmae : e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <h2>value : {this.state.userNmae}</h2>
            </div>
        );
    }
}

export default Test3;