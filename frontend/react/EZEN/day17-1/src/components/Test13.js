import React, { useState , useCallback  } from 'react';
import Count from './Count';
import Title from './Title';

const Test13 = () => {
    const [age,setAge] = useState(10)
    const [money,setMoney] = useState(10000)

    //보통 거의다 useCallback 으로 묶음
    const handleAge = useCallback( () => {
        console.log('age');
        setAge( age + 1 )
    },[age])
    const HandleMoney = useCallback( () => {
        console.log('money');
        setMoney( money + 1000 )
    },[money])

    return (
        <div>
            <Title/>
            <Count text="나이" count={age}/>
            <button onClick={handleAge}>나이증가</button>
            <Count text="급여" count={money}/>
            <button onClick={HandleMoney}>급여증가</button>
        </div>
    );
};

export default Test13;