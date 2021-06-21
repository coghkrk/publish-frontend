import React, { useState } from 'react';

const Test1 = () => {
    const [ text , setText ] = useState('초기값')
    const [ color , setColor ] = useState('blue')
    const [ count , setCount ] = useState(0)
    const handleUp = () => {
        setCount(count + 1)
    }
    const handleDown = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h2>&nbsp;&nbsp;&nbsp;_Test1_함수형 복습_</h2>
            <p>
                <button onClick={() => setColor('green')}>green</button>
                <button onClick={() => setColor('pink')}>pink</button>
                <button onClick={() => setColor('red')}>red</button>
                <button onClick={() => setColor('gray')}>gray</button>
            </p>
            <p>
                <button onClick={() => setText('A')}>A</button>
                <button onClick={() => setText('B')}>B</button>
                <button onClick={() => setText('C')}>C</button>
                <button onClick={() => setText('D')}>D</button>
            </p>
            <p>
                <button onClick={handleUp}>+</button>
                <button onClick={handleDown}>-</button>
            </p>
            <h3 style={{color:color}}>{text}/{color}/{count}</h3>
        </div>
    );
};

export default Test1;