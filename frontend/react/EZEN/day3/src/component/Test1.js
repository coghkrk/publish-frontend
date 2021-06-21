import React, { Component } from 'react';

class Test1 extends Component {
    render() {
        const title = 'this is message'
        return (
            <div>
                <Test1Sub
                    msg = {title}
                    name ='Anna'
                />
            </div>
        );
    }
}
class Test1Sub extends Component {
    render() {
        return (
            <div>
                <Test1SubSub 
                    msg = {this.props.msg}
                    name = {this.props.name}
                />
            </div>
        );
    }
}
class Test1SubSub extends Component {
    render() {
        return (
            <div>
                <h2> message : {this.props.msg}</h2>
                <h2> name : {this.props.name}</h2>
            </div>
        );
    }
}

export default Test1;