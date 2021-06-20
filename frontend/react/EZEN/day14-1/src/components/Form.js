import React, { useRef, useState } from 'react';
import './Form.css'

const Form = ({onInsert}) => {
    const textInput = useRef()
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onInsert(text)//내용추가
        //초기화
        setText('')
        //포커스
        textInput.current.focus()
    }
    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    }
    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <input type="text"
                value={text}
                ref={textInput}
                placeholder="todolist"
                onChange={handleChange}
                />
                <button type="submit">ADD</button>
            </form>
        </div>
    );
};

export default Form;