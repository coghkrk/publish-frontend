import React, { useRef, useState } from 'react';

const Test6 = () => {
    const idInput = useRef()
    const [names , setNames] = useState({
        userid:'',
        pwd:'',
        email:''
    })
    //비구조 할당 가능
    const {userid, pwd, email} = names
    const handleChange1 = (e) => {
        setNames({
            ...names,
            userid:e.target.value
        })
    }
    const handleChange2 = (e) => {
        setNames({
            ...names,
            pwd:e.target.value
        })
    }
    const handleChange3 = (e) => {
        setNames({
            ...names,
            email:e.target.value
        })
    }
    const handleClear = () => {
        setNames({
            userid:'',
            pwd:'',
            email:''
        })
    }
    return (
        <div>
            <input type="text" onChange= {handleChange1} value={userid} ref={idInput}/>
            <input type="text" onChange= {handleChange2} value={pwd}/>
            <input type="text" onChange= {handleChange3} value={email}/>
            <button onClick={handleClear}>del</button>

            <h2>{userid} / {pwd} / {email} </h2>
        </div>
    );
};

export default Test6;