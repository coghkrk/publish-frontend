import React, { Component } from 'react';

class Test4 extends Component {
    inputId = React.createRef()
    no = 1
    state = {
        id : '',
        pw : '',
        data : []
    }
    change = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    input = (e) => {
        e.preventDefault()
        const {data,id ,pw} = this.state
        this.setState({
            data : data.concat({no:this.no++,id: id, pw: pw}),
            id : '',
            pw : ''
        })
        this.inputId.current.focus()
    }
    //[{no:1, id:'ddd',pw:'123'},{},{}]
    render() {
        const {id,pw,data} = this.state
        return (
            <div>
                <form onSubmit={this.input}>
                    <input type="text"
                        ref = { this.inputId} 
                        name = 'id'
                        value = {id}
                        onChange = {this.change}/>
                    <br/>
                    <input type="text"
                        name = 'pw'
                        value = {pw}
                        onChange = {this.change}/>&nbsp;
                    <button type='submit'>confirm</button>
                    <hr/>
                    <ul>
                        {
                            data.map(item => <li key={item.no}>{item.no}/{item.id}/{item.pw}</li>)
                        }
                    </ul>
                </form>
            </div>
        );
    }
}

export default Test4;