import React, { useEffect, useRef } from 'react';

const Test8 = () => {
    const textRef = useRef()

    useEffect( () => {
        textRef.current.focus()
    }, [])
    //ref는 포커스 input에 포커스 
    return (
        <div>
            <h4>Test8</h4>        
            <input type="text"  ref = {textRef}  />
        </div>
    );
};

export default Test8;