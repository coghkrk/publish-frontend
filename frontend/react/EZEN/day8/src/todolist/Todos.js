import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import './Todos.css'

class Todos extends Component {
    no = 1
    state = {
        todos : [

        ]
    }
    handleInsert = (text) => {
        const { todos } = this.state
        this.setState({
            todos : todos.concat({no :this.no++, text:text , done: false})
        })
    }
    handleRemove = (id) => {
        const {todos} = this.state
        this.setState({
           todos : todos.filter( todo => todo.no !== id) 
        })
    }
    handleToggle = (id) => {
        const {todos} = this.state
        this.setState({
            todos : todos.map(todo => {
                if(todo.no === id){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
                
            })
        })
    }
    render() {
        const {todos} = this.state
        return (
            <div className="Todos">
                <h1>TODO LIST</h1>
                <Form
                    insert={this.handleInsert}
                />
                <List
                    todos={todos}
                    remove ={this.handleRemove}
                    toggle = {this.handleToggle}
                />
            </div>
        );
    }
}

export default Todos;