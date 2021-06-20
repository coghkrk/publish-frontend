import React, { Component } from 'react';

class Test3 extends Component {
    state = {
        username:'',
        password:''
    }
    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({
            [name] : value
        })

    }
    render() {
        const {username,password} = this.state
        return (
            <div>
                <input type ="text" vlaue={username} name="username" onChange={this.handleChange}/>
                <input type ="text" vlaue={password} name="password" onChange={this.handleChange}/>
               
                {
                    password.length > 6 ? 
                    <button>off</button> : <button>on</button>
                }

                <button disabled={password.length > 6 && true}>button</button>

                <p>{password.length}</p>
            </div>
        );
    }
}

export default Test3;