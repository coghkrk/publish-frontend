import React, { Component } from 'react';

class Test2 extends Component {
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
    //javascript indexOf 값이 들어있냐 없냐 
    render() {
        const {data,text}= this.state
        const txt = data.filter(item => item.name.indexOf(text) !== -1)
        console.log(txt);
        const txt1 = data.find(item => item.no ===1)
        console.log(txt1);
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

export default Test2;