import React from 'react';

const Name = ({name, onName}) => {
    return (
        <div>
            <label>name : </label>
            <input type="text" value={name} onChange={onName}/>
        </div>
    );
};

export default Name;