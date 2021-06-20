import React, { useRef, useState } from 'react';

const Test1 = () => {
    const textInput = useRef()
    const [names,setNames] = useState({
        text1:'',
        test2:'',
        test3:''
    })
    //names.text1 , names.text2
    const { text1, text2, text3} = names
    const handleChange = (e) => {
        const {value, name} = e.target
        setNames({
            ...names,
            [name] : value
        })
    }
    const handleClear = () => {
        setNames({
            text1:'',
            text2:'',
            text3:''
        })
        textInput.current.focus();
    }
    return (
        <div>
            <h2>여러개의 input을 처리하기</h2>
            <input type="text" onChange={handleChange} name="text1" value={text1} ref={textInput}/>
            <input type="text" onChange={handleChange} name="text2" value={text2}/>
            <input type="text" onChange={handleChange} name="text3" value={text3}/>
            <button onClick={handleClear}>지우기</button>

            <h2>{text1} / {text2} / {text3} </h2>
        </div>
    );
};

export default Test1;