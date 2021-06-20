import React, { useRef, useState } from 'react';

const Test7 = () => {
    const no = useRef(1)
    const textInput = useRef()
    const [text,setText] = useState('')
    const [items,setItems] = useState([])
    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setItems([
            ...items,
            {
                no:no.current++, 
                text:text
            }
        ])
        setText('')
        textInput.current.focus()
    }
    const handleDel = (id) => {
        //filter
        setItems( items.filter(item => item.no !== id))
    } 
    return (
        <div>
             <h4> 배열: 데이터 추가2 </h4>
             <form onSubmit={handleSubmit}
             //엔터로 데이터 입력을 원할시 form태그로 한번 감싸야 함
             >
                <input type="text" ref={textInput} value={text} onChange={handleChange}/>
                <button type="submit">추가</button>
             </form>
             <ul>
                {
                    items.map(item => <li key={item.no}>
                        {item.no}/{item.text}
                        <button onClick={() => handleDel(item.no)}>del</button>
                    </li>)
                }
             </ul>
        </div>
    );
};

export default Test7;