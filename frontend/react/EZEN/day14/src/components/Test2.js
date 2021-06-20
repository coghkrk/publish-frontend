import React, { useState } from 'react';

const Test2 = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const handleChange = (e) => {
        const {value} = e.target
        setLastname(value)
    }
    const handlecClear = () => {
        setFirstname('')
        setLastname('')
    }
    return (
        <div>
            <input type="text" onChange={(e) => setFirstname(e.target.value)} value={firstname}/>
            <input type="text" onChange={handleChange} value={lastname}/>
            <button onClick={handlecClear}>del</button>
            <h3>First: {firstname}</h3>
            <h3>Last: {lastname}</h3>
        </div>
    );
};

export default Test2;