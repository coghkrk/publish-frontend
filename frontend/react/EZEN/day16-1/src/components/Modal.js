import React from 'react';
import './Modal.css'

const Modal = ({onClose,findData}) => {
    return (
       <div className='Modal'>
        <h2>곡명:{findData.title} </h2>
        <div>
            {/* <iframe width="793" height="446" src={"https://www.youtube.com/embed/"+키값 } ></iframe> */}
            <iframe width="793" height="446" src={"https://www.youtube.com/embed/"+ findData.key } ></iframe>
        </div>
        <p>가수 :{findData.singer} </p>
        <button className="close" onClick={onClose} >X</button>
    </div>
    );
};

export default Modal;
