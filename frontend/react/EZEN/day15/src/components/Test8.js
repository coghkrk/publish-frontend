import React, { useReducer, useRef, useState } from 'react';

const Item = ({todo,onDel}) => {
    return (
        <div>
            <span>{todo.no} / {todo.text}</span> &nbsp;
            <button onClick={() => onDel(todo.no)}>DEL</button>
        </div>
    );
};


const List = ({todos, onDel}) => {
    return (
        <div>
            {
                todos.map(todo => <Item todo={todo} key={todo.no} onDel={onDel}/>)
            }
        </div>
    );
};


const Form = ({onAdd}) => {
    const textInput = useRef()
    const [text, setText] = useState('')
    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()  
        onAdd(text)//속성값으로 받아서 처리
        setText('')
        textInput.current.focus()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={textInput} value={text} onChange={handleChange}/>&nbsp;
                <button type="submit">ADD</button>
            </form>
        </div>
    );
};


const Test8 = () => {
    const no = useRef(1)
    const [todos, setTodos] = useState([])

    const handleAdd = (text) => {
        setTodos([
            ...todos,
            {
                no:no.current++,
                text:text
            }
        ])
    }

    const handleDel = (id) => {
        setTodos(todos.filter(todos => todos.no !== id))
        //const newItems = todos.filter(todos => todos.no !== id)
        //setTodos(newItems)
    }
    return ( 
        <div>
            <h4> todoList 테스트 </h4>  
            <Form
                onAdd={handleAdd}
            /> 
            <br/>
            <hr/>
            <List
                todos={todos}
                onDel={handleDel}
            />      
        </div>
    );
};

export default Test8;