import React, { Component } from 'react';
import styled, {css} from 'styled-components'

class Test10 extends Component {
    state = {
        count:1,
        min:0,
        max:10
    }
    handleUp = () => {
        const {max, count} = this.state
        this.setState({
            count : count >= max ? max : count + 1
        })
    }
    handleDown = () => {
        const {min, count} = this.state
        this.setState({
            count : count <= min ? min : count - 1
        })
    }
    render() {
        const {count, min, max} = this.state
        return (
            <div>
                <Container>
                    <h2>NUM : {count} </h2>
                    <Button disabled={count === max} className="up" onClick={this.handleUp}/>
                    <Button disabled={count === min} className="down" onClick={this.handleDown}/>
                </Container>
            </div>
        );
    }
}

export default Test10;

const Container = styled.div`
    margin:20px;
    h2 {
        font-size:50px;
    }
`
const Button = styled.button`
    padding:5px 20px 20px 20px;
    margin-right:10px;
    font-size:40px;
    &.up::after{
        content:'📤'
    }
    &.down::after{
        content:'📥'
    }
    &:disabled {
        color:#090909;
        filter: grayscale(100%);
        cursor: not-allowed
    }
`