import React from 'react';

const Animal = ({animal, onAnimal}) => {
    return (
        <div>
            <label>aimal : </label>
            <input type="text" value={animal} onChange={onAnimal}/>
        </div>
    );
};

export default Animal;