import React, { Component } from 'react';

class Test6SubSub extends Component {
    render() {
        return (
            <div>
                <h3>Test6SubSub : {this.props.onName}</h3>
                <h3>Test6SubSub : {this.props.onAge}</h3>
                <button onClick={this.props.onHandle3}>confirm</button>
            </div>
        );
    }
}

export default Test6SubSub;