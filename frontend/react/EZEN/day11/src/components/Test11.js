import React, { Component } from 'react';
import axios from 'axios'

class Test11 extends Component {
    state = {
        data :null
    }
    handleLoad = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    data : res.data
                })
            })
    }
    render() {
        return (
            <div>
                <p><button onClick={this.handleLoad}>데이터 불러오기</button></p>
                <textarea 
                    cols={80}
                    rows={20}
                    readOnly={true}
                    value={JSON.stringify(this.state.data , null , 2)}
                />
            </div>
        );
    }
}

export default Test11;