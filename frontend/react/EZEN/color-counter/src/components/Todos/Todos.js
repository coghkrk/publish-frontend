import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = ({input, data, insert ,remove, toggle, changeInput}) => {
    return (
        <div>
            <h2>TODO LIST</h2>
            <TodoInput 
                changeInput={changeInput}
                insert={insert}
                input={input}
            />
            <TodoList 
                data={data}
                remove={remove}
                toggle={toggle}
            />
        </div>
    );
};

export default Todos;