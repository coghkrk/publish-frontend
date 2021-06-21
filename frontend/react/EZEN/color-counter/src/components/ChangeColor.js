import React from 'react';
import { changeColor } from '../store/modules/changecolor';

const ChangeColor = ({color, changeColor}) => {
    return (
        <div>
            <h1 style={{color:color}}>컬러값 : {color} </h1>
            <p>
                <button onClick={() => changeColor('red')}>red</button>
                <button onClick={() => changeColor('green')}>green</button>
                <button onClick={() => changeColor('pink')}>pink</button>
                <button onClick={() => changeColor('blue')}>blue</button>
                <button onClick={() => changeColor('lime')}>lime</button>
            </p>
            <p>
                <button onClick={changeColor}>red</button>
                <button onClick={changeColor}>green</button>
                <button onClick={changeColor}>pink</button>
                <button onClick={changeColor}>blue</button>
                <button onClick={changeColor}>lime</button>
            </p>
        </div>
    );
};

export default ChangeColor;