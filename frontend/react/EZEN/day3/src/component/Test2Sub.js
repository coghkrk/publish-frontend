import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Test2Sub extends Component {
    render() {
        const {name,age,addr,tel,color,done} = this.props
        return (
            <div style={{border:'1px solid',
                borderColor: this.props.color,
                padding:15,
                marginBottom:20,
                }}>

                <p>name: {name}</p>
                <p>age: {age}</p>
                <p>addr: {addr}</p>
                <p>tel: {tel}</p>
                <p>color: {color}</p>
                <p>logic: {done} </p>
                
                {done === true ? <button>login</button>:<button>logout</button>}
                <br/>
                {done && <button>login</button>}
                <br/>
                {done || <button>logout</button>}
            </div>
        );
    }
}

Test2Sub.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    addr : PropTypes.string.isRequired,
    tel : PropTypes.string,
    color : PropTypes.string,
    done : PropTypes.bool,
}

Test2Sub.defaultProps ={
    name : '○○○',
    age : 0,
    addr : '○○○',
    tel : '○○○-○○○-○○○',
    done : false,
    color : 'red',
}

export default Test2Sub;