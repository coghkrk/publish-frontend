import React, { useRef, useState } from 'react';
import Form from './Form';
import List from './List';
import './Todos.css'

const Todo = () => {
    const no = useRef(1)
    const [todos, setTodos] = useState([])

    const handleInsert = (text) => {
        //setTodos( todos.concat({no:no.current++, text}))
        setTodos([
            ...todos,
            {
                no:no.current++,
                text,
                done:false
            }
        ])
    }
    const handleDel = (id) => {
        setTodos(todos.filter( todo => todo.no !== id))
    }
    /*
    const handleToggle = (id) => {
        const newItem = todos.map ( todo => todo.no === id ? {...todo, done:!todo.done}:todo)
        setTodos(newItem)
    }
    */
   const handleToggle = (id) => {
       setTodos(todos.map ( todo => {
           if(todo.no === id ) {
               return {
                   ...todo,
                   done: !todo.done
               }
           }
           return todo
       }))
   }
    return (
        <div className="Todo">
            <h1>TODO LIST</h1>
            <Form
                onInsert={handleInsert}
            />
            <List
                todos={todos}
                onDel={handleDel}
                onToggle={handleToggle}
            />
        </div>
    );
};

export default Todo;