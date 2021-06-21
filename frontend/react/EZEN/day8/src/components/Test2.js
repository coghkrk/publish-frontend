import React, { Component } from 'react';
import '../Test2.css'

class Test2 extends Component {
    state = {
        done : false
    }
    handleClick = () => {
        const {done} = this.state
        this.setState({
            done : !done
        })
    }
    render() {
        const {done} = this.state
        return (
            <div>
                <p className={`${ done ? 'on' : null}`} onClick={this.handleClick}>hi</p>
                {/* <p className={`${ done && 'on'}`} onClick={this.handleClick}>hi</p> */}
            </div>
        );
    }
}

export default Test2;