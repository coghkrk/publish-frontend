import React, { Component } from 'react';

class Test1SubSub extends Component {
    render() {
        const {
            msgSubSub,
            handleClickSubSub,
            handleClick2SubSub,
            Click3,
            Click4} = this.props
        return (
            <div>
                <h2>SubSub area</h2>
                <h2>message : {msgSubSub}</h2>
                <button onClick={handleClickSubSub}>confirm</button>
                <button onClick={handleClick2SubSub}>change</button>
                <button onClick={() => Click3(10)}
                //바로 출력은 () => 함수로 한번 묶어야 함
                >print 10</button>
                <button onClick={() => Click4(20)}>print 20</button>
                
            </div>
        );
    }
}

export default Test1SubSub;