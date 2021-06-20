import React, { Component } from 'react';

class Test1 extends Component {
    state = {
        count : 0
    }
    handleUp1 = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    handleDown1 = () => {
        this.setState({
            count : this.state.count - 1
        })
    }
    handleUp2 = () => {
        this.setState((prevState,props) => { 
            return {
                count : prevState.count + 1
            }
        })
    }
    handleDown2 = () => {
        this.setState((state) => {
            return {
                count : state.count -1
            }
        })
    }
    handleUp3 = () => {
        this.setState({
            count : this.state.count + 1
        }, () => this.setState({
            count : this.state.count + 1
        }))
        // this.setState({
        //     count : this.state.count + 1
        // })
        //함수안에 있는 아이들이 일괄처리 됨 즉 한번만 작동함
    }
    handleDown3 = () => {
        this.setState({
            count : this.state.count -1 
        }, () => alert('hi'))//함수 추가로 실행 하려면 이런식으로 작성 해야 함 
    }
    handleUp4 = () => {
        this.setState((state) => {
            return {
                count : state.count + 1
            }
        })
        this.setState((state) => {
            return {
                count : state.count + 1
            }
        })//이런 형식으로 하면 콤마 안해도 함수 일괄 처리 안되는구먼
    }
    handleDown4 = () => {
        this.setState((state) => {
            return {
                count : state.count -1
            }
        })
        this.setState((state) => {
                alert('hi')
        })
    }
    render() {
        return (
            <div>
                <h2>count : {this.state.count}</h2>
                <p>
                    <button onClick={this.handleUp1}>up</button>
                    <button onClick={this.handleDown1}>down</button>
                </p>
                <p>
                    <button onClick={this.handleUp2}>up</button>
                    <button onClick={this.handleDown2}>down</button>
                </p>
                <p>
                    <button onClick={this.handleUp3}>up2</button>
                    <button onClick={this.handleDown3}>dowun2</button>
                </p>
                <p>
                    <button onClick={this.handleUp4}>up3</button>
                    <button onClick={this.handleDown4}>dowun3</button>
                </p>
            </div>
        );
    }
}

export default Test1;