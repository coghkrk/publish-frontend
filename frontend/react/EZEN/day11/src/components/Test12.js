import React, { Component } from 'react';
import axios from 'axios'

class Test12 extends Component {
    state = {
        data : null
    }
    componentDidMount() {
        this.handleLoad()
    }
    handleLoad = () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    data : res.data
                })
            })
    }
    render() {
        const {data} = this.state
        return (
            <div>
                <h2>처음부터 자료 0번 body 출력</h2>
                <p>{data && data[0].body}</p>
                {/* <p>{data[0].body}</p> 랜더가 먼저 실행 되기 때문에 출력되지 않는다 data는 null값이기 때문에  */}
            </div>
        );
    }
}

export default Test12;