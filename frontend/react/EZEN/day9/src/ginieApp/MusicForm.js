import React, { Component } from 'react';
import './MusicForm.css'

class MusicForm extends Component {
    state = {
        text:''
    }
    handleChange = (e) => {
        this.setState({
            text : e.target.value
        },() => this.props.onTitle(this.state.text))   
    }
    render() {
        const {text} = this.state
        return (
            <div className="MusicForm">
                <input type="text"
                value={text}
                onChange={this.handleChange}
                placeholder="음악명을 검색하세요"/>
            </div>
        );
    }
}

export default MusicForm;