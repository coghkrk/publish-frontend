import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({data, remove}) => {
    return (
        <div>
            {
                data.map ( item => <TodoItem key={item.id} item ={item} remove={remove}/>)
            }
        </div>
    );
};

export default TodoList;