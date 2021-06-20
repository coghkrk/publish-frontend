import React, { Component } from 'react';
import cat2 from './images/cat2.jpg'
import bg from './images/bg.jpg'
//import cat2 from './images/cat2.jpg' 같은 폴더의 이미지를 끌어와 쓰는 법

class Test2 extends Component {
    render() {
        const style1 = {
            width:400,
            height:200,
            background:'skyblue'
        }
        return (
            <div>
                <div style={ style1 }></div>
                <div style={{
                    width:'100%',
                    height:700,
                    backgroundPosition:'0 0',
                    backgroundImage: 'url('+bg+')',
                    backgrund:'yellow',
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat'
                }}></div>
                <div></div>
                <img src="/images/cat2.jpg" alt="" 
                //public에 있는 이미지를 처리하는 법
                />
                <img src={ cat2 } 
                //같은 폴더내에 있는 이미지를 끌어와 처리하는 법
                />
            </div>
        );
    }
}

export default Test2;