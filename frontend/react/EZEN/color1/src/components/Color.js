import React from 'react';

const Color = ({color , red, green, blue, yellow, pink}) => {
    return (
        <div>
            <h2 style={{color:color}}>COLOR : {color} </h2>
            <p>
                <button onClick={red}>red</button>
                <button onClick={green}>green</button>
                <button onClick={blue}>blue</button>
                <button onClick={yellow}>yellow</button>
                <button onClick={pink}>pink</button>
            </p>
        </div>
    );
};

export default Color;