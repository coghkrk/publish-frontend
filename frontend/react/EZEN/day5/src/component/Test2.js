import React, { Component } from 'react';

class Test2 extends Component {
    state = {
        data : [
            {no:1, name:'Tom', age:20},
            {no:2, name:'Anna', age:21},
            {no:3, name:'Jhon', age:22},
            {no:4, name:'Jain', age:23},
            {no:5, name:'Joe', age:24},
        ]
    }
    handleClick1 = () => {
        this.setState({
            data : this.state.data.filter(item => item.no !== 2)
        })
    } 
    handleClick2 = () => {
        this.setState({
            data : this.state.data.filter(item => item.no !== 3)
        })
    }
    handleClick3 = () => {
        this.setState({
            data : this.state.data.filter(item => item.no !==4)
        })
    }
    handleClick4 = (no) => {
        this.setState({
            data : this.state.data.filter(item => item.no !== no)
        })
    }
    handleClick5 = (id) => {
        this.setState({
            data : this.state.data.filter(item => item.no !== id)
        })
    }
    handleClick6 = (id) => {
        this.setState({
            data : this.state.data.map (item => {
                if(item.no === id){
                    return {
                        ...item,
                        name : 'EunSeo',
                        age : 100
                    } 
                } else {
                    return item
                }
            })
        })
    }
    handleClick7 = (id) => {
        this.setState({
            data : this.state.data.map (item => item.no === id ? {...item , name:'mike', age:200}:item)
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.data.map( item => 
                            <li key={item.no}>
                                {item.no}/{item.name}/{item.age}
                            </li>)
                    }
                </ul>
                <hr/>
                <p>
                    <button onClick={this.handleClick1}> del num 2</button><br/><br/>
                    <button onClick={this.handleClick2}> del num 3</button><br/><br/>
                    <button onClick={this.handleClick3}> del num 4</button>
                </p>
                <hr/>
                <p>
                    <button onClick={()=>this.handleClick4(1)}>del num 1</button><br/><br/>
                    <button onClick={()=>this.handleClick5(5)}>del num 5</button>
                </p>
                <hr/>
                <p>
                    <button onClick={()=>this.handleClick6(4)}>name age change</button><br/><br/>
                    <button onClick={()=>this.handleClick7(2)}>name age change</button>
                </p>
            </div>
        );
    }
}

export default Test2;