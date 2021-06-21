import React, { Component } from 'react';
import '../Test4.css'

class Test4 extends Component {
    render() {
        const data = [
            {no : 1 , name : 'Anna', age : 20 , addr : 'Seoul' , done : true},
            {no : 2 , name : 'Tom' , age : 30 , addr : 'Jeju' , done : false},
            {no : 3 , name : 'Jhon' , age : 40 , addr : 'Gwangju' , done : true},
            {no : 4 , name : 'Jain', age : 50 , addr : 'Busan' , done : false },
            {no : 5 , name : 'Joe' , age : 60 , addr : 'Jeonju' , done : true},
        ]
        return (
            <div className="Test4">
                <table>
                    <caption></caption>
                    <colgroup>
                        <col classNmae="no"/>
                        <col classNmae="name"/>
                        <col classNmae="age"/>
                        <col classNmae="addr"/>
                        <col classNmae="done"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>no</th>
                            <th>name</th>
                            <th>age</th>
                            <th>addr</th>
                            <th>T/F</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>{data[0].no}</td>
                            <td>{data[0].name}</td>
                            <td>{data[0].age}</td>
                            <td>{data[0].addr}</td>
                            <td>{data[0].done}</td>
                        </tr> */}
                        
                        {
                            data.map((item) =>{
                                return (
                                    <tr>
                                        <td key={item.no}>{item.no}</td>
                                        <td key={item.name}>{item.name}</td>
                                        <td key={item.age}>{item.age}</td>
                                        <td key={item.addr}>{item.addr}</td>
                                        <td key={item.done}>{item.done === true ? 'o' : 'x'}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <br/>
                <br/>
                <br/>
                <button onClick={this.handleClidk1}>delet-3</button>
                <br/>
                <button onClick={this.handleClidk2}>delet-4</button>
            </div>
        );
    }
}

export default Test4;