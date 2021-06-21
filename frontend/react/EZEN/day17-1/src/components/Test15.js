import React, { useReducer } from 'react';

const initalState = 0
const reducer = (state , action) => {
    switch(action.type){
        case 'PLUSE' :
            return state + 1
        case 'MINUS' :
            return state - 1
        case 'RESET' :
            return 0
        defalut :
            return state
    }
} 

const Test15 = () => {
    //cnt1 , cnt2
    const [cnt1 , dispatch1] = useReducer(reducer, initalState)
    const [cnt2 , dispatch2] = useReducer(reducer, 10)
    const style = { width:'20px', height:'20px'}

    return (
        <div>
            <h2>{cnt1}</h2>
            <p>
                <button style={style} onClick = {() => dispatch1({type:'PLUSE'})}>+</button>
                <button style={style} onClick = {() => dispatch1({type:'MINUS'})}>-</button>
                <button onClick={ () => dispatch1({type:'RESET'})}>reset</button>
            </p>
            <br/>
            <hr/>
            <h2>{cnt2}</h2>
            <p>
                <button style={style} onClick = {() => dispatch2({type:'PLUSE'})}>+</button>
                <button style={style} onClick = {() => dispatch2({type:'MINUS'})}>-</button>
                <button onClick={ () => dispatch2({type:'RESET'})}>reset</button>
            </p>

        </div>
    );
};

export default Test15;