import React, { Component } from 'react';

class Test4 extends Component {
    render() {
        const name ='Anna'
        const message = 'blabla'
        const age ='20'
        const style1 = {
            color:'red',
            backgroudColor:'pink',
            width:400,
            height:100,
            fontSize:30,
            lineHeight:2,
        }
        const style2 ={

        }
        return (
            <div>
                <p style={style1}>name: {name}</p>
                <p style={style2}>message: {message}</p>
                <p style={
                    {color:'blue',}
                }>age: {age}</p>
            </div>
        );
    }
}

export default Test4;