import React from 'react';

const Color = ({color, red, green, blue}) => {
    return (
        <div>
            <h2 style={{color:color}}>컬러 :{color} </h2>
            <button onClick={red}>red</button>
            <button onClick={green}>green</button>
            <button onClick={blue}>blue</button>
        </div>
    );
};

export default Color;