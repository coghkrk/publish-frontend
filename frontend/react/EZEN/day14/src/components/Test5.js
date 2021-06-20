import React, { useState } from 'react';

const Test5 = () => {
    const [names, setNames] = useState({
        first:'',
        last:''
    })
    const handleChnage1 = (e) => {
        setNames({
            ...names,
            first:e.target.value
        })
    }
    const handleChnage2 = (e) => {
        setNames({
            ...names,
            last:e.target.value
        })
    }
    return (
        <div>
            <input type="text" onChange={handleChnage1}/>
            <input type="text" onChange={handleChnage2}/>
            <h2> {names.first} / {names.last} </h2>
        </div>
    );
};

export default Test5;