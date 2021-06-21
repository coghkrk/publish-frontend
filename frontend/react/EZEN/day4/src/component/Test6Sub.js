import React, { Component } from 'react';
import Test6SubSub from './Test6SubSub';

class Test6Sub extends Component {
    render() {
        const {onName, onAge , } = this.props
        //this.props정리 
        return (
            <div>
                <h2>Test6SubSub : {onName}/{onAge} </h2>
                <button onClick={this.props.onHandle}>confirm</button>
                <hr/>
                
                <Test6SubSub
                    onName = {this.props.onName}
                    onAge = {this.props.onAge}
                    onHandle3 = {this.props.onHandle3}
                />
            </div>
        );
    }
}

export default Test6Sub;