import React, { Component } from 'react';

class Item extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.todo !== nextProps.todo){
            return true;
        }else{
            console.log('no-update')
            return false
        }
    }
    render() {
        const {todo,remove,toggle} = this.props
        return (
            <>
                <li>
                    <span className={`${todo.done && 'on'}`} onClick={() => toggle(todo.no)}> &#8744; </span>
                    <strong className={`${todo.done && 'on'}`}>{todo.text}</strong>
                    <button onClick={() => remove(todo.no)}>DEL</button>
                </li> 
            </>
        );
    }
}

export default Item;