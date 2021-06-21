import React, { Component } from 'react';

class Test3 extends Component {
    render() {
        const title = '신상명세서'
        const name = '홍길동'
        const age = 20
        const addr = '종로구'
        const sex = '여자'
        let tel = '000-0000-0000'
        return (
            <div>
                <h2>
                    {title}
                </h2>
                <ul>
                    <li>이름 : {name}</li>
                    <li>나이 : {age}</li>
                    <li>주소 : {addr}</li>
                    <li>전화 : {tel}</li>
                </ul>
                {/* 주석 */}
                <p
                // 한줄주석
                /* 여러줄 주석 */
                >
                    나는 문단입니다.
                </p>
            </div>
        );
    }
}

export default Test3;