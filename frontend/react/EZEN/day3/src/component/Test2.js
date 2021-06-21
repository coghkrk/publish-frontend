import React, { Component } from 'react';
import Test2Sub from './Test2Sub';

class Test2 extends Component {
    render() {
        return (
            <div>
                <Test2Sub
                    name = 'Anna'
                    age = {20}
                    tel = '000-000-000'
                    addr = 'seoul'
                    done = {true}
                    color = 'green'
                />
                <Test2Sub 
                    name ='Tom'
                    age = {23}
                    tel = '111-111-111'
                    addr = 'jeju'
                    done = {false}
                    color = 'skyblue'
                />
                 <Test2Sub 
                    name ='Tom'
                    age = {23}
                    color = 'yellow'
                />
                 <Test2Sub 
                    color = 'pink'
                />
            </div>
        );
    }
}

export default Test2;