import React from 'react';

const Item = ({todo,onDel,onToggle}) => {
    return (
        <>
            <li>
                <span className={`${todo.done && 'toggle'}`} onClick={() => onToggle(todo.no)}>&#10003;</span>
                <em>{todo.text}</em><button onClick={() => onDel(todo.no)}>DEL</button>
            </li>
        </>
    );
};

export default Item;