import React from 'react';
import {connect, Provider} from 'react-redux'
import {createStore} from 'redux'

//////////////////////basic 디자인 : 껍데기////////////////////////
const Counter = ({cnt, increment, decriment}) => {
    const style = { width:'20px',height:'20px'}
    return (
        <div>
            <h2>숫자 증가 감소하기</h2>
            <h1>숫자 :{cnt}</h1>
            <button onClick={increment} style={style}>+</button>
            <button onClick={decriment} style={style}>-</button>
        </div>
    );
};

///////////////순수함수 action의 경우의 수 자바스크립트 작성 : 액션//////////////
const initalState = { count : 0 }
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                ...state,
                count : state.count + 1
            }
        case 'DECRIMENT' :
            return {
                ...state,
                count : state.count - 1
            }
        default : 
            return state
    }
}

/////////////// basic디자인 + reducer = 화면에 보이는 최종 UI : 껍데기 + 액션 = 매칭////////////
//읽기
const mapStateToProps = (state) => {
    return {
        cnt : state.count
    }
}
//쓰기
const mapDispatchToProps = (dispatch) => {
    return {
        increment : () => dispatch({type:'INCREMENT'}),
        decriment : () => dispatch({type:'DECREMENT'}),
    }
}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)


//////////////////////store 관리/////////////////////
const Test17 = () => {
    const store = createStore(reducer)
    return (
        <div>
            <Provider store={store}>
                <Counter/>
            </Provider> 
        </div>
    );
};

export default Test17;