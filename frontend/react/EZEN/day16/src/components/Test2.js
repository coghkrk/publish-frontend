import React, { useEffect, useState } from 'react';

const Test2 = () => {
    const [count,setCount] = useState(0)
    const make = () => {
        setCount(count + 1 )
    }

    useEffect(() => {
        const timer = setInterval(make, 1000)
        return () => {
            //언마운트 ,뒷정리부분
            clearInterval(timer)
        }
    },[count])

    return (
        <div>
            <h1>COUNT : {count}</h1>
        </div>
    );
};

export default Test2;