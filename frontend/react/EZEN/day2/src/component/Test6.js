import React, { Component } from 'react';

class Test6 extends Component {
    render() {
        const done = false

        return (
            <div>
                {done === true ? <button>로그인</button>:<button>로그아웃</button>} 
                <br/>
                <br/>
                {done ? <button>로그인</button>:<button>로그아웃</button>}
                {/* true && 결과값 */}
                <br/>
                <br/>
                {done && <button>로그인</button>}   
                {/* false || 결과값 */}    
                <br/>
                <br/>
                {done || <button>로그아웃</button>}
            </div>
        );
    }
}

export default Test6;