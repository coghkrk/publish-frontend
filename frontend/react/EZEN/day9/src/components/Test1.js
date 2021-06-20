import React, { Component } from 'react';
import $ from 'jquery'
//jquery 사용법 좋은 방법은 아님

class Test1 extends Component {
    state = {
        data : [
            {no:1, name:'Tom',age:20},
            {no:2, name:'강호동',age:20},
            {no:3, name:'Anna',age:20},
            {no:4, name:'유재석',age:20},
            {no:5, name:'Micky',age:20},
            {no:6, name:'채은서',age:20},
            {no:7, name:'Jhon',age:20},
            {no:8, name:'민경민',age:20},
            {no:9, name:'Mike',age:20}
        ]
    }

    componentDidMount(){
        //jquery
        var msg = ''
        var $li = $('ul li')
        $('#text').keyup(function(){
            msg = $(this).val();
            $li.hide()
            var txt = $li.find('span:contains('+msg+')')
            $(txt).parent().show()
        })
    }

    render() {
        const {data} = this.state
        return (
            <div>
                <input type="text" id="text"/>
                <hr/>
                <ul>
                    {
                        data.map(item => <li ket={item.no}>
                            {item.no}/<span>{item.name}</span>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Test1;