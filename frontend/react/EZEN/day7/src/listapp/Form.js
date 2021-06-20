import React, { Component } from 'react';

class Form extends Component {
    inputText = React.createRef()

    state = {
        text: '',
    }
    Submit1 = (e) => {
        e.preventDefault()
        const {text} = this.state
        const {onInsert} = this.props
        onInsert(text)
        this.setState({
            text:'',
        })
        this.inputText.current.focus()
    }
    Change = (e) => {
        this.setState({
            text : e.target.value
        })
    }
    render() {
        const {text} = this.state
        return (
            <div>
                <form onSubmit={this.Submit1}>
                <input type="text"
                ref = {this.inputText}
                value = {text}
                onChange = {this.Change}/>&nbsp;
                <button type="submit">add</button>
                </form>
            </div>
        );
    }
}

export default Form;