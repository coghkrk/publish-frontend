import React, { useState, useMemo , useCallback } from 'react';

const Test12 = () => {
    const [text,setText] = useState('')
    const [data,setData] = useState([])

    // useMemo 함수의 return값을 기억해놓고 씀 (자식 컴포넌트)
    const fontSize = useMemo( () => {
        console.log('test');
        return text.length
    }, [text , data] )

    // useCallback 함수 자체를 기억해 놓고 다시 씀
    const handleClick = useCallback(() => {
        setData([
            ...data, text
        ])
    },[text , data])

    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
            <button onClick={handleClick}> + </button>
            <h3> text length : { text.length }</h3>
            <br/>
            <hr/>
            <br/>
            <h2> text length : { fontSize }</h2>
            <h3>{data}</h3>
        </div>
    );
};

export default Test12;