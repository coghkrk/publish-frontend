import React, { useReducer, useState } from 'react';
// reducer를 쓸땐 순수 자바스크립트 함수 components 밖에 만들어야 함 
const initalState = 0 
const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT' : 
            return state + 1
        case 'DECREMENT' :
            return state - 1
        case 'RESET' :
            return 0
        defalut :
        return state
    }
}
// 증가 INCREMENT , 감소 DECREMENT , 초기화 RESET -> action.type
// action.type : 사용자 정의 대문자로 작성한다 


const Test14 = () => {
    const [cnt , dispatch] = useReducer(reducer, initalState)
    const style = {width:'20px', height:'20px'}

    return (
        <div>
            <h2>{cnt}</h2>
            <p>
                <button onClick={() => dispatch({type:'INCREMENT'})} style={style}>+</button>
                <button onClick={() => dispatch({type:'DECREMENT'})} style={style}>-</button>
                <button onClick={() => dispatch({type:'RESET'})}>reset</button>
            </p>
        </div>
    );
};

export default Test14;