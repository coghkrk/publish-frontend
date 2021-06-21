import React from 'react';

const TodoInput = ({changeInput, insert, input}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        insert ( input )
        changeInput('')
    }
    return (
       <form onSubmit={handleSubmit}>
           <input type="text" 
                value={input} 
                onChange={(e) => changeInput(e.target.value)}
            /> &nbsp;
           <button type="submit" onClick={() => insert(input)}>+</button>
       </form>
    );
};

export default TodoInput;