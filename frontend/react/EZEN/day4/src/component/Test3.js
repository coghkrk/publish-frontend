import React, { Component } from 'react';

class Test3 extends Component {
    render() {
        const data = [
            {no : 1 , name : 'Anna', age : 20 , addr : 'Seoul'},
            {no : 2 , name : 'Tom' , age : 30 , addr : 'Jeju'},
            {no : 3 , name : 'Jhon' , age : 40 , addr : 'Gwangju'},
            {no : 4 , name : 'Jain', age : 50 , addr : 'Busan' },
            {no : 5 , name : 'Joe' , age : 60 , addr : 'Jeonju'},
        ]
        return (
            <div>
                <ul>
                    <li>{data[0].no}/{data[0].name}</li>
                    <li>{data[1].no}/{data[1].name}</li>
                    <li>{data[2].no}/{data[2].name}</li>
                    <li>{data[3].no}/{data[3].name}</li>
                </ul>
                <hr/>
                <ul
                //정석 방법 
                >
                    {
                        data.map((item,index) =>{
                            return(
                                <li key={item.no}>{item.no}/{item.name}</li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <ul
                //한줄일때는 return 생략가능
                >
                    {
                       data.map(item => <li key={item.no}>{item.no}/{item.name}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Test3;