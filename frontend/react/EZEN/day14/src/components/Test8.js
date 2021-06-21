import React, { useRef, useState } from 'react';

const Test8 = () => {
    const idInput = useRef()
    const [names , setNames] = useState({
        userid:'',
        pwd:'',
        email:''
    })
    //비구조 할당 가능
    const {userid, pwd, email} = names
    const handleChange = (e) => {
        setNames({
            ...names,
            [e.taret.name]:e.target.value
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
            <input type="text" onChange= {handleChange} value={userid} ref={idInput} name="userid"/>
            <input type="text" onChange= {handleChange} value={pwd} ref={idInput}  name="pwd"/>
            <input type="text" onChange= {handleChange} value={email} ref={idInput} name=""email/>
            <button onClick={handleClear}>del</button>

            <h2>{userid} / {pwd} / {email} </h2>
        </div>
    );
};

export default Test8;