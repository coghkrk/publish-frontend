import React, { Component } from 'react';

class Test3 extends Component {
    state = {
        data : [
            {no:1, name:'Tom',age:20},
            {no:2, name:'강호동',age:20},
            {no:3, name:'Anna',age:20},
            {no:4, name:'유재석',age:20},
            {no:5, name:'Micky',age:20},
            {no:6, name:'채은서',age:20},
            {no:7, name:'Jhon',age:20},
            {no:8, name:'민경민',age:20},
            {no:9, name:'Mike',age:20}
        ],
        text :''
    }
    handleChange = (e) => {
        this.setState({
            text :e.target.value
        })
    }
    render() {
        const {data,text}= this.state
        const txt = data.filter(item => {
            const re = new RegExp(text,'ig') // <- 정규식 생성자 함수
            return item.name.match(re)
        })
        return (
            <div>
                <input type="text" vlaue={text} onChange={this.handleChange}/>
                <hr/>
                {
                    txt.map(item => <p key={item.no}>
                        {item.no}/{item.name}
                    </p>)
                }
                <hr/>
                <ul>
                    {
                        data.map(item => <li key={item.no}>
                            {item.no}/<span>{item.name}</span>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Test3;