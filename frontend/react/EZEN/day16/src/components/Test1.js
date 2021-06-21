import React, { useEffect, useState } from 'react';

const Test1 = () => {
    /*
    중요!
    외부데이터 /타이머 /데이터업데이트 체크해줌
    라이프사이클은 클래스 컴포넌트에서만 사용가능
    useEffect는 라이프사이클의 세가지 기능을 합쳐놓은것
    */
   const [ count ,setCount] = useState(0)
   const [text, setText] = useState('')
   const style = {
       width:'20px',
       height:'20px',
       margin:'10px'
   }
   const handleChange = (e) => {
       setText(e.target.value)
   }

//    useEffect( () => {
//        console.log('마운트 / 업데이트');
//    })

//    useEffect(() => {
//        console.log('마운트');
//    },[])//,[] 작성시 업데이트 막아줌

//   useEffect(() => {
//       console.log('마운트와 특정대상 업데이트');
//   },[count , text])//대괄호 안에 그 대상을 작성

    return (
        <div>
            <h4> useEffect </h4>
            <button style={style} onClick={() => setCount(count+1)}>+</button>
            <button style={style} onClick={() => setCount(count-1)}>-</button>
            <h1>NUM:{count} / TEXT:{text}</h1>
            <p>
                <input type="text" value={text} onChange={handleChange}/>
            </p>
        </div>
    );
};

export default Test1;