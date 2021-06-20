import React, { Component } from 'react';

class Test2 extends Component {
    render() {
        var arr = ['유재석','이효리','화사','엄정화','제시']
        return (
            <div>
                <h2>환불원정대</h2>
                <p>{arr[0]}</p>
                <p>{arr[1]}</p>
                <p>{arr[2]}</p>
                <hr/>
                <ul>
                    {
                        arr.map((item,index) => {
                        return(<li key={index}>{item}</li>)
                        })
                    }
                </ul>
                <hr/>
                <ul
                //출력되는 값이 한줄이면 (하나) {블럭 return} 생략가능
                //실무에선 아래 형태로 많이 사용함
                >
                    {
                        arr.map((item,index) => <li key={index}>{index}-{item}</li> )
                    }
                    
                </ul>
            </div>
        );
    }
}

export default Test2;