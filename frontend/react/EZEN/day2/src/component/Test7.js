import React, { Component } from 'react';

class Test7 extends Component {
    render() {
        const name = 'Anna'
        return (
            <div>
                <Test7Sub 
                myname ={name}
                title ='profile'
                age = {20}
                tel = '000-0000-0000'
                done = {true}
                />
            </div>
        );
    }
}
class Test7Sub extends Component {
    render() {
        const {
            title, myname, age, addr, tel, done
        } = this.props
        return (
            <div>
                <h1>{title}</h1>
                <h2> NAME : {myname}</h2>
                <h2> AGE : {age}</h2>
                <h2> TEL : {tel}</h2>
                <h2> {done === true ? <button>login</button>:<button>logout</button>}</h2>
            </div>
        );
    }
}
// class Test7Sub extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2> NAME : {this.props.myname}</h2>
//                 <h2> AGE : {this.props.age}</h2>
//                 <h2> TEL : {this.props.tel}</h2>
//                 <h2> {this.props.done === true ? <button>login</button>:<button>logout</button>}</h2>
//             </div>
//         );
//     }
// }

export default Test7;