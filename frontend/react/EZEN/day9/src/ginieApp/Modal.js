import React, { Component } from 'react';
import './Modal.css'

class Modal extends Component {
    render() {
        const {done,onClose,find} = this.props
        return (
            <div className={`Modal ${done && 'on'}`}>
                <h2>{find.title} </h2>
                <div>
                    <iframe width="568" height="332" src={"https://www.youtube.com/embed/" + find.key}></iframe>
                </div>
                <p>{find.singer} </p>
                <button className="close" onClick={onClose}>X</button>
            </div>
        );
    }
}

export default Modal;