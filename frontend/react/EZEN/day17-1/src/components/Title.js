import React from 'react';

const Title = () => {
    console.log('title');
    return (
        <div>
            <h2>급여와 나이</h2>
        </div>
    );
};

export default React.memo(Title);