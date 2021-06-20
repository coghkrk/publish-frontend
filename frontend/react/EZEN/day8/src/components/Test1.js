import React, { Component } from 'react';

class Test1 extends Component {
    no = 6
    state = {
        data: [
            {no : 1 , name : 'Tom' , done : false },
            {no : 2 , name : 'Anna' , done : false },
            {no : 3 , name : 'Jhon' , done : false },
            {no : 4 , name : 'Joe' , done : false },
            {no : 5 , name : 'Mike' , done : false },
        ]
    }
    handleAdd  = () => {
        const {data} = this.state
        this.setState({
            data : data.concat({no: this.no ++ , name : 'Micky', done : false})
        })
    }
    handleDel = (id) => {
        const {data} = this.state
        this.setState({
            data : data.filter (item => item.no !== id)
        })
    }
    handleMod = (id) => {
        const {data} = this.state
        this.setState({
            data : data.map (item => {
                if(item.no === id){
                    return {
                        ...item,
                        name : 'AAA',
                        done : true
                    }
                }else {
                    return item
                }
            })
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleAdd}>add</button>
                <button onClick={() => this.handleDel(1)}>del</button>
                <button onClick={() => this.handleMod(3)}>mod</button>
            </div>
        );
    }
}

export default Test1;