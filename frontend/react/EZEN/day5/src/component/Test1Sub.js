import React, { Component } from 'react';
import Test1SubSub from './Test1SubSub';

class Test1Sub extends Component {
    render() {
        const {
            msgSub,
            handleClickSub,
            handleClick2Sub,
            Click3,
            Click4} = this.props
        return (
            <div>
                <h2>Sub area</h2>
                <h2>message : {msgSub}</h2>
                <button onClick={handleClickSub}>confirm</button>
                <hr/>
                <Test1SubSub 
                    msgSubSub = {msgSub}
                    handleClickSubSub = {handleClickSub}
                    handleClick2SubSub = {handleClick2Sub}
                    Click3 = {Click3}
                    Click4 = {Click4}
                />
            </div>
        );
    }
}

export default Test1Sub;