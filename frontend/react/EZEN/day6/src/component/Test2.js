import React, { Component } from 'react';

class Test2 extends Component {
    //고유번호 선언 (클래스 안에서 변수를 선언 할때는 let , const , var 없어야 함)
    no = 1

    state = {
        data1 : [],
        data2 : [],
        data3 : [],
        data4 : [],
    }
    handleClick1 = (name) => {
        this.setState({
            //데이터 추가 concat()
            data1 : this.state.data1.concat(name)
        })
    }
    handleClick2 = (name,age) => {
        this.setState({
            //키와 값이 동일할 경우에는 하나만 작성해도 된다 (단점 고유번호가 없다 하지만 방법은 있다)
            //data2 : this.state.data2.concat({name , age})
            data2 : this.state.data2.concat({name : name , age : age})
        })
    }
    handleClick3 = () => {
        this.setState({
            //고유번호 처리 방법 클래스에 변수로 선언
            data3 : this.state.data3.concat({no:this.no ++})
        })
    }
    handleClick4 = () => {
        this.setState({
            data4 : this.state.data4.concat(
                {no : this.no++, name: 'Tom' + (Math.floor(Math.random()*10)),
                age : Math.floor(Math.random()*90) + 10 }
                )
        })
    }
    num1 = (id) => {
        this.setState({
            data4 : this.state.data4.map(item => {
                if(item.no === id){
                    return {
                        ...item,
                        name : 'Anna',
                        age : 1000000
                    }
                }else{
                    return item
                }
            })
        })
    }
    num2 = (id) => {
        this.setState({
            data4 : this.state.data4.map(item => {
                if(item.no === id){
                    return {
                        ...item,
                        name : 'Jhon',
                        age : 20000000
                    }
                }else{
                    return item
                }
            })
        })
    }
    num3 = (id) => {
        this.setState({
            data4 : this.state.data4.map( item => item.no === id ? {...item, name : 'Mike',age:4000000}:item )
        })
    }
    del1 = (id) => {
        this.setState({
            data4 : this.state.data4.filter(item => item.no !== id)
        })
    }
    del2 = (id) => {
        this.setState({
            data4 : this.state.data4.filter(item => item.no !== id)
        })
    }
    del3 = (id) => {
        this.setState({
            data4 : this.state.data4.filter(item => item.no !== id)
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handleClick1('Tom')}>Tom</button>
                <button onClick={() => this.handleClick2('Tom',20)}>add</button>
                <button onClick={() => this.handleClick3}>number</button>
                <button onClick={() => this.handleClick4()}>add data</button>
                <br/>
                <button onClick={() => this.num1(1)}>num1</button>
                <button onClick={() => this.num2(4)}>num4</button>
                <button onClick={() => this.num3(2)}>num2</button>
                <br/>
                <button onClick={() =>this.del1(2)}>del 2</button>
                <button onClick={() =>this.del2(5)}>del 5</button>
                <button onClick={() =>this.del3(1)}>del 1</button>
                <hr/>
                <ul>
                    {
                        this.state.data4.map( item => <li key={item.no}>{item.no}/{item.name}/{item.age}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Test2;