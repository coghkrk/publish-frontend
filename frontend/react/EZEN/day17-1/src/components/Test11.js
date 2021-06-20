import React, { useState , useMemo } from 'react';

const Test11 = () => {
    const [cnt1 , setCnt1] = useState(1)
    const [cnt2 , setCnt2] = useState(1)
    
    //함수를 별도로 만들어서 return 처리할때 (return기억)
    const isEven = useMemo(() => {
        console.log('test');
        return cnt1 % 2 === 0
    },[cnt1])

    return (
        <div>
            <h2>{cnt1}</h2>
            <button onClick = { () => setCnt1(cnt1+1)}>+</button>
            <h2>{cnt2}</h2>
            <button onClick = { () => setCnt2(cnt2+1)}>+</button> 
            <br/>
            <br/>
            <hr/>
            <br/>
            <h3>{ isEven ? '짝수' : '홀수' }</h3> 
        </div>
    );
};

export default Test11;