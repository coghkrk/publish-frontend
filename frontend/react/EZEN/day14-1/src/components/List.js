import React from 'react';
import Item from './Item';
import './List.css'

const List = ({todos,onDel,onToggle}) => {
    return (
        <div className="List">
            <ul>
                {
                    todos.map ( todo => <Item key={todo.no} todo={todo} onDel={onDel} onToggle={onToggle}/>) 
                }
            </ul>
        </div>
    );
};

export default List;